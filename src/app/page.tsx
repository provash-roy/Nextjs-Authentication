"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button onClick={() => router.push("/login")}>Sign In</Button>
      <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
    </div>
  );
}
