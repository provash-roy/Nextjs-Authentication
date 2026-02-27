"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (!session) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {session.user?.role === "admin" ? (
        <p>Welcome Admin! This is Admin Dashboard.</p>
      ) : (
        <p>Welcome User! This is User Dashboard.</p>
      )}
    </div>
  );
}
