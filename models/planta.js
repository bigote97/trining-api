import mongoose from "mongoose";

const Schema = mongoose.Schema;

const plantaSchema = new Schema({
  tipo: String,
  name: String,
  cosecha: String,
  siembra: String,
  descripcion: String
})


const Planta = mongoose.model('Planta', plantaSchema);
export default Planta;