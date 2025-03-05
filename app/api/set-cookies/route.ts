import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text();
  cookies().set("token", body, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 1,
    path: "/",
  });

  return new Response("Server cookie set!", { status: 200 });
}
