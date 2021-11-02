import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: String,
  precio: Number,
  registerDate: { type: Date, default: Date.now },
  stock: Number,
});

const role = mongoose.model("roles", roleSchema);

export default role;
