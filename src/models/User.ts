import mongoose from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
