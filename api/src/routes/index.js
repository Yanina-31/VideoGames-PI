const { Router } = require('express');
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async (req, res) => {
    const { name } = req.query
    const resAxios = await axios.get(`https://api.rawg.io/api/games?key=95ee22bb5b8147b194a08168a9ded502`)
    const { number, totalResults, results} = resAxios.data ;
            let response = []
            if (results.length > 0) {
                let obj = {};
                for (let i = 0; i< results.length ; i++ ) {
                    obj = {name: results[i].name, image: results[i].background_image, idApi: results[i].id, released: results[i].released,  rating_top: results[i].rating_top}
                    response.push(obj);
                }
            }
            res.json(response);
        });

module.exports = router;
