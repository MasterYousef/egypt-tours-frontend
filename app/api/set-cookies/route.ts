import { cookies } from "next/headers";

export async function POST(req: Request) {
  const reqData = await req.json();
  console.log("Received request data:", reqData);

  cookies().set("token", reqData.token || "secureValue", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 1,
    path: "/",
  });

  return new Response("Server cookie set!", { status: 200 });
}
