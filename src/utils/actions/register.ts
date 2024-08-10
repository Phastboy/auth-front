"use server";

import { API_URL } from "@/constants/api";

export default async function register({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
      credentials: "include",
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(errorDetails.message || "Failed to register");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message || "An error occurred during registration");
  }
}
