"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await axios.post("/api/auth/register", { email, password });
      console.log(res.data);
      if (res.data.success) {
        router.push("/login");
      }
    } catch (error: unknown) {
      alert(error instanceof Error ? error.message : "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Register
        </h2>

        {/* Email Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <Separator />
          <span className="absolute inset-0 flex items-center justify-center text-sm bg-white px-2 text-muted-foreground">
            OR
          </span>
        </div>

        {/* Google Button */}
        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>

        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
