import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const response = NextResponse.json({ message: 'Cookie deleted' });
  const cookie = cookies()
  cookie.delete("user")
  cookie.delete("token")
  return response;
}