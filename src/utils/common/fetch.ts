"use server";

import { API_URL } from "@/constants/api";
import { cookies } from "next/headers";

interface FetchOptions {
  endpoint: string;
  method?: string;
  body?: any;
}

export async function fetchFromApi({
  endpoint,
  method = "GET",
  body,
}: FetchOptions) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(errorDetails.message || "Request failed");
    }

    return await response.json();
  } catch (error: any) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw new Error(error.message);
  }
}
