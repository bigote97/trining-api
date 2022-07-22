import { Router } from 'express';
const router = Router();

import Planta from '../models/planta.js';

//Raiz
router.get('/', (req, res) => {
  res.json({
    "Title": "Sistema de gestion de plantas y semillas"
  });
})
// Listado de plantas
router.get('/listar', async (req, res) => {
  try {
    const listadoPlantas = await Planta.find()
    res.json({
      "Title": "listado de plantas",
      listadoPlantas: listadoPlantas
    });
  } catch (error) {
    res.json({
      "Title": "ERROR",
      error: error
    });
  }
})
// buscador
router.get('/buscar/:plantaabuscar', async (req, res) => {
  const {plantaabuscar} = req.params
  try {
    const plantaEncotrada = await Planta.find({ name: plantaabuscar })
    res.json({
      "Title": "listado de plantas",
      plantaEncotrada: plantaEncotrada
    });
  } catch (error) {
    res.json({
      "Title": "ERROR",
      error: error
    });
  }

})
// Agregar planta
router.post('/nueva', async (req, res) => {
  try {
    await Planta.create({
      tipo: req.body.tipo,
      name: req.body.name,
      siembra: req.body.siembra,
      cosecha: req.body.cosecha,
    })
    res.json({
      "Title": `Creado con exito`
    });
  } catch (error) {
    res.json({
      "Title": "ERROR",
      error: error
    });
  }
  
})

// Editar planta existente
router.put('/editar', async (req, res) => {
  res.json({
    "title": `El ID es: ${req.body.id}`
  })
})

export default router;