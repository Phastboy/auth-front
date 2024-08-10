import { cookies } from "next/headers";

const isProduction = process.env.NODE_ENV === "production";
const cookieOptions: any = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "None" : "Lax",
  path: "/",
};
export const setToken = async (name: string, value: any) => {
  cookies().set(name, value, cookieOptions);
};
