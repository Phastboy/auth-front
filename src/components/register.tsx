"use client";
import { useRef } from "react";
import register from "@/utils/actions/register";
import { SubmitButton } from "./submit-button";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const messageRef = useRef<HTMLParagraphElement>(null);
  const router = useRouter();

  const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await register({ username, email, password });
      if (messageRef.current) {
        messageRef.current.textContent = "Registration successful";
        messageRef.current.className = "text-green-500 text-sm italic";
      }
      console.log("Registration successful:", response);
      router.push("/profile");
    } catch (error: any) {
      if (messageRef.current) {
        messageRef.current.textContent = error.message || "Registration failed";
        messageRef.current.className = "text-red-500 text-sm italic";
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={createUser}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
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
            <SubmitButton className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none">
              Register
            </SubmitButton>
          </div>
        </form>
        <p ref={messageRef} className="mt-4 text-center"></p>
      </div>
    </div>
  );
}
