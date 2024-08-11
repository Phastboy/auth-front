"use server";

import { API_URL } from "@/constants/api";
import { cookies } from "next/headers";

export async function getAllUser() {
  try {
    const fetchUsers = await fetch(`${API_URL}/users`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });

    if (!fetchUsers.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await fetchUsers.json();
    return users;
  } catch (error: any) {
    console.error("Error fetching users:", error);
    throw new Error(error.message);
  }
}
