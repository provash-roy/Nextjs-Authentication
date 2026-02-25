import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // JWT থেকে attach করা id
      name?: string | null;
      email?: string | null;
      role?: "user" | "admin"; // JWT থেকে attach করা role
    };
  }

  interface User {
    id: string;
    role?: "user" | "admin";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string; // JWT token এ attach করা user id
    role?: "user" | "admin"; // JWT token এ attach করা user role
  }
}
