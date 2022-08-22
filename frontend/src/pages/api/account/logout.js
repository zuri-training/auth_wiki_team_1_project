import cookie from "cookie";

export default async (request, response) => {
  if (request.method === "POST") {
    response.setHeader("Set-Cookie", [
      cookie.serialize("access", '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(0),
        sameSite: "strict",
        path: "/api/",
      }),
      cookie.serialize("refresh", '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(0),
        sameSite: "strict",
        path: "/api/",
      }),
    ]);

    return response.status(200).json({
      success: "Logged out successfully",
    });
  } else {
    response.setHeader("Allow", [ "POST" ]);
    return response
      .status(405)
      .json({ error: `Method ${request.method} not allowed` });
  }
};
