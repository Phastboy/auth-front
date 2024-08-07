"use server";

const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://myapp.local";

export const getHomeData = async () => {
  try {
    const response = await fetch(`${apiURL}/`);
    if (!response.ok) {
      throw new Error("Failed to fetch home data");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
