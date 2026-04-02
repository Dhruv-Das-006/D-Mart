import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = '2a2e721dfaaf823f03df2bec9ffc93e713b8cbe5f188640d93a9f9fab1842b2306c9ac260224cf0535e5';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    const res = await fetch(`http://localhost:3001/history?userId=${decoded.id}`);
    const history = await res.json();
    return NextResponse.json({ history }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    const body = await request.json();
    
    // Set history item
    const newItem = {
      ...body,
      userId: decoded.id, 
      id: Date.now().toString(),
    };

    const res = await fetch('http://localhost:3001/history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    });

    const data = await res.json();
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Unauthorized or invalid data' }, { status: 401 });
  }
}
