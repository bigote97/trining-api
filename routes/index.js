import { Router } from 'express';
const router = Router();

let plantas = [
  {"id":0, "type": "planta", "name": "albahaca", "cosecha": "verano", "siembra": "otonio"},
  {"id":1, "type": "planta", "name": "aloe", "cosecha": "01/05", "siembra": "01/02"},
  {"id":2, "type": "semilla" ,"name": "tomate", "cosecha": "01/05", "siembra": "01/02"},
  {"id":3, "type": "planta", "name": "limon", "cosecha": "01/12", "siembra": "11/02"}
]
//Raiz
router.get('/', (req, res) => {
  res.json({
    "Title": "Sistema de gestion de plantas y semillas"
  });
})
// Listado de plantas
router.get('/listar', (req, res) => {
  res.json({
    "Title": "listado de plantas",
    plantas
  });
})
// buscador
router.get('/buscar', (req, res) => {
  res.json({
    "Title": "Productos que coinciden"
  });
})
// Agregar planta
router.post('/nueva', (req, res) => {
  console.log(req)
  res.json({
    "Title": "Productos que coinciden"
  });
})

export default router;