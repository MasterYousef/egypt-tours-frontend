import { cookies } from "next/headers";

export async function POST(req: Request) {
  const reqData = await req.json();
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "strict" as any as "strict",
    maxAge: 60 * 60 * 24 * 1,
    path: "/",
  };
  cookies().set("token", reqData.token, options);
  cookies().set("user", reqData.user, options);
  return new Response("Server cookie set!", { status: 200 });
}
