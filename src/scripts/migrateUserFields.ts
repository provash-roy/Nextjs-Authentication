import mongoose from "mongoose";

// নতুন schema interface
interface IUser {
  name?: string;
  email: string;
  password?: string;
  role?: "user" | "admin";
  isVerified?: boolean;
}

// নতুন schema
const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/test";

async function migrate() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");

    // আগের ডকুমেন্টে নতুন ফিল্ড add করা
    const result = await User.updateMany(
      {
        $or: [
          { name: { $exists: false } },
          { role: { $exists: false } },
          { isVerified: { $exists: false } },
        ],
      },
      {
        $set: {
          name: "Unknown", // default name
          role: "user", // default role
          isVerified: false, // default isVerified
        },
      },
    );

    console.log(`Modified ${result.modifiedCount} documents`);
    await mongoose.disconnect();
    console.log("MongoDB disconnected. Migration done ✅");
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

migrate();
