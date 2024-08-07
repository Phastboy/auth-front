"use client";
import { useRef } from "react";
import login from "@/utils/actions/login";

export default function LoginForm() {
  const messageRef = useRef<HTMLParagraphElement>(null);

  const loginUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { accessToken, refreshToken } = await login({ email, password });
      if (messageRef.current) {
        messageRef.current.textContent = "Login successful";
        messageRef.current.className = "text-green-500 text-sm italic";
      }
      // Handle tokens if needed
      console.log("Login successful:", { accessToken, refreshToken });
    } catch (error: any) {
      if (messageRef.current) {
        messageRef.current.textContent = error.message || "Login failed";
        messageRef.current.className = "text-red-500 text-sm italic";
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
        <p ref={messageRef} className="mt-4 text-center"></p>
      </div>
    </div>
  );
}
