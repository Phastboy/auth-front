"use server";

import { API_URL } from "@/constants/api";
import { cookies } from "next/headers";

export async function fetchWithAuth() {
  const response = await fetch(`${API_URL}/auth/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });
  console.log("Request Headers:", response.headers);
  console.log({ "get profile": response });
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || "Request failed");
  }

  return response.json();
}
