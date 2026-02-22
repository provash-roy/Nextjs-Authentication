import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const users = await User.find();
  return NextResponse.json({ users });
}
