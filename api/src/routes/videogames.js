const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const {YOUR_API_KEY} = process.env;
const {Genre, Videogame, videogame_genre} = require('../db')
const { v4: uuidv4 } = require('uuid');

// GET https://api.rawg.io/api/games
const getApiInfo = async () => {
    let games = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`)
    games = games.data.results

    let gamesPageTwo = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=2`)
    gamesPageTwo = gamesPageTwo.data.results

    let gamesPageTres = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=3`)
    gamesPageTres = gamesPageTres.data.results

    let gamesPageCuatro = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=4`)
    gamesPageCuatro = gamesPageCuatro.data.results

    let gamesPageCinco = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=5`)
    gamesPageCinco = gamesPageCinco.data.results

    games = games.concat(gamesPageTwo).concat(gamesPageTres).concat(gamesPageCuatro).concat(gamesPageCinco)

        
    if (games.length > 0) {

        let response = await games.map((result) => {
            return {
                id: result.id,
                name: result.name,
                description: result.description,
                released: result.released,
                image: result.background_image,
                rating: result.rating,
                platforms: result.platforms.map(e => e.platform.name),
                genres: result.genres.map(e => e.name),
            }        
        })
        return response;
    } 
}


// GET https://api.rawg.io/api/games?search={game}
const getApiByName = async (name) => {
        const resAxios = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}`);
        const { results } = resAxios.data ;
        let response = results.map((result) => {
            return {
                id: result.id,
                name: result.name,
                released: result.released,
                image: result.background_image,
                rating: result.rating,
                platforms: result.platforms.map(e => e.platform.name),
                genres: result.genres.map(e => e.name),
            }        
        })

       
        return response ;
    } 


// GET https://api.rawg.io/api/games/{id}

const getApiById = async (id) => {
const resAxios = await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
let response = resAxios.data
    return {
        id: response.id,
        name: response.name,
        released: response.released,
        image: response.background_image,
        rating: response.rating,
        platforms: response.platforms.map(e => e.platform.name),
        genres: response.genres.map(e => e.name),
    }
}

const getDbByName = async (name) => {
    const DBInfo = await getDBInfo();
    const filtByName = DBInfo.filter(games => games.name.includes(name));
    return filtByName;
}

const getInfoByName = async (name) => {
    const apiByName = await getApiByName(name)
    const DbByName = await getDbByName(name)
    const infoNameTotal = apiByName.concat(DbByName)
    return infoNameTotal;
}

const getDBInfo = async () => {
    return await Videogame.findAll({ 
        include:{
            model: Genre,
            attributes: ['name'],
            through:{
                attributes: []
            }
        }
    })
}


const getAllInfo = async () => {
    const apiInfo = await getApiInfo()
    const bdInfo = await getDBInfo()
    const infoTotal = apiInfo.concat(bdInfo)
    return infoTotal
}

router.get('/database', async (req, res) => {

    const gamesDB = await Videogame.findAll()

    res.json(gamesDB)
})

router.get('/', async (req, res) => {
    const { name } = req.query
    try {
        if (name) {
            const infoByName = await getInfoByName(name)
            res.json(infoByName);
        }
        else{
            const allDate = await getAllInfo()   
            res.json(allDate);
        }
        }
        catch(e){
            res.send('Nombre no encontrado')
        }
})

router.get('/', async (req, res) => {
    const { name } = req.query
    try {
        if (name) {
            let juegoName = await Videogame.findAll({
                where: {
                    name
                },
                include: Genre
            })
            return res.json(juegoName)
        }
    
            const gameName = await getInfoByName(name)   
            res.json(gameName);
        }
        catch(e){
            res.send('Nombre no encontrado')
        }
})

router.get('/database', async (req, res) => {

    const gamesDB = await Videogame.findAll()

    res.json(gamesDB)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if(!Number(id)){
            let juego = await Videogame.findOne({
                where: {
                    id
                }
            })
            return res.json(juego)
        }
        let gameDetails = await getApiById(id)
        return res.json(gameDetails);
    }
    catch(e){
        res.send('Id no encontrado')
    }
})


router.post('/', async (req, res) => {
    let{
        name,
        description,
        released,
        image,
        rating,
        platforms,
        genre, 
    } = req.body

    if(name && description && rating && genre){ 
        const genero = await Genre.findOne({ 
            where: { 
                name: genre
            }
        })
        if (genero){
            let id = uuidv4()

            let videoGameCreate = await Videogame.create({ 
                id: id,
                name,
                description,
                released,
                image,
                rating,
                platforms: [platforms],
            
            })
            // let genreCreate = await Genre.create({ 
            //     name: genre,  
            // })
        
            let conexionCreate = await videogame_genre.create({
                videogameId: videoGameCreate.id,
                genreId: genero.id
            })
        return res.json([videoGameCreate, {genre:genero}]);
        }
    res.send("No se encontro el genero")
    }
})


module.exports = router;