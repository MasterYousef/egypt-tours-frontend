import { cookies } from "next/headers";

export async function POST(req: Request) {
  const reqData = await req.json();
  cookies().set("token", reqData.body || "secureValue", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 1,
    path: "/",
  });

  return new Response("Server cookie set!", { status: 200 });
}
