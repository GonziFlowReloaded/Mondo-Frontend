import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    toke: {
      type: String,
    },
  
  },
  {
    timestamp: true,
  }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;