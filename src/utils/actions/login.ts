"use server";

import { API_URL } from "@/constants/api";
import { setToken } from "../cookies";

export default async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error details:", errorDetails);
      throw new Error(errorDetails.message || "Failed to login");
    }

    const cookieHeader = response.headers.get("set-cookie");

    if (cookieHeader) {
      const cookiesArray = cookieHeader.split(", ");
      cookiesArray.forEach((cookieString) => {
        const [cookieNameValue, ...cookieAttributes] = cookieString.split("; ");
        const [name, value] = cookieNameValue.split("=");

        if (name && value) {
          setToken(name, value);
        }
      });
    }

    const data = await response.json();
    console.log("Login data:", data);
    return data;
  } catch (error: any) {
    console.error("Login error:", error);
    // No need to throw again if error was due to redirection
    if (error.message !== "NEXT_REDIRECT") {
      throw new Error(error.message || "An error occurred during login");
    }
  }
}
