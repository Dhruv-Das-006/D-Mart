import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = '2a2e721dfaaf823f03df2bec9ffc93e713b8cbe5f188640d93a9f9fab1842b2306c9ac260224cf0535e5';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Check if user exists
    const usersRes = await fetch(`http://localhost:3001/users?email=${encodeURIComponent(email)}`);
    const existingUsers = await usersRes.json();

    if (existingUsers.length > 0) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Create user
    const newUser = { id: Date.now().toString(), name, email, password };
    const createRes = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    if (!createRes.ok) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }

    const savedUser = await createRes.json();

    // Generate JWT
    const token = jwt.sign({ id: savedUser.id, email: savedUser.email }, JWT_SECRET, { expiresIn: '1d' });

    // Set HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    const { password: _, ...userWithoutPassword } = savedUser;
    
    return NextResponse.json({ user: userWithoutPassword }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
