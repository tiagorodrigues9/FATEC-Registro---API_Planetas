import mongoose from "mongoose";
const planetSchema = new mongoose.Schema({
  nome: String,
  tipo: String,
  descricao: String,
  raio: String,
  densidade: String,
  gravidade: String,
  temperatura: Number,
  qntLuas: Number,
});

// Modelo principal
const Planet = mongoose.model("Planet", planetSchema);

export default Planet;
