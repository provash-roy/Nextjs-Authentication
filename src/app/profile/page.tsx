import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Hello {session?.user?.email}</h1>

      <LogoutButton />
    </div>
  );
}
