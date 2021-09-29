const { Router } = require('express');
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogame = require('./videogames.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogame);



module.exports = router;
