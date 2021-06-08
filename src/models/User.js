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
});

userSchema.pre('save', async function(){
  console.log("Users password", this.password)
  this.password = await bcryptjs.hash(this.password, 5);
  console.log("Hashed password", this.password);
})

const User = mongoose.model("User", userSchema);
export default User;