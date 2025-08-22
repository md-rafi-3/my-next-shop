"use client"

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard/add-product", // login successful হলে কোথায় যাবে
    });
  };


  return (
   <div className="max-w-md mx-auto mt-20 my-10 p-8 bg-white rounded-2xl shadow-lg">
  <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h2>

  <form onSubmit={handleLogin} className="space-y-5">
    {/* Email */}
    <div>
      <label className="block text-gray-700 font-medium mb-1">Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Password */}
    <div>
      <label className="block text-gray-700 font-medium mb-1">Password</label>
      <input
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
    >
      Sign In
    </button>
  </form>
</div>

  )
}
