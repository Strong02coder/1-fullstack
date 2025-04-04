import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
  verificationTokenExpiry: {
    type: Date,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordTokenExpiry: {
    type: Date,
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
