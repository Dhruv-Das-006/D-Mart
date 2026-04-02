import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = '2a2e721dfaaf823f03df2bec9ffc93e713b8cbe5f188640d93a9f9fab1842b2306c9ac260224cf0535e5';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string, email: string };
    
    // Fetch latest user details (optional)
    const userRes = await fetch(`http://localhost:3001/users/${decoded.id}`);
    
    if (!userRes.ok) {
       return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    
    const user = await userRes.json();
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ authenticated: true, user: userWithoutPassword }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
