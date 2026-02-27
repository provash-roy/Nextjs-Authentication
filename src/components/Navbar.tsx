"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      {/* Left Links */}
      <div className="flex gap-6 font-medium text-gray-700">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link
          href="/dashboard"
          className="hover:text-blue-600 transition-colors"
        >
          Dashboard
        </Link>
        <Link href="/profile" className="hover:text-blue-600 transition-colors">
          Profile
        </Link>
      </div>

      {/* Right Auth Buttons */}
      <div className="flex items-center gap-4">
        {!session ? (
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-500 font-bold text-black rounded hover:bg-blue-600 transition"
          >
            Login
          </Link>
        ) : (
          <>
            <span className="text-gray-800 font-medium">
              {session.user?.name || session.user?.email}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="px-3 py-1 bg-red-500 text-black font-bold rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
