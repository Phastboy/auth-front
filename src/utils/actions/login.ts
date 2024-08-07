"use server";

const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://myapp.local";

export default async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(`${apiURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error details:", errorDetails);
      throw new Error(errorDetails.message || "Failed to login");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Login error:", error);
    throw new Error(error.message || "An error occurred during login");
  }
}
