import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  avatarUrl: String,
  socialOnly: { type: Boolean, default: false },
  password: { type: String },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  videos: [{type: mongoose.Schema.Types.ObjectId, ref: "Video"},]
});

userSchema.pre("save", async function(){
  if(this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 5);
  }
});

const User = mongoose.model("User", userSchema);
export default User;