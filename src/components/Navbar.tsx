"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between p-4 bg-gray-100">
      <Link href="/">Home</Link>
      <div className="space-x-4">
        {!session ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <span>{session.user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
