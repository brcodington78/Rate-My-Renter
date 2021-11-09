import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    isLandLord: { type: Boolean, required: true },
    reviews: [String],
    id: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema)