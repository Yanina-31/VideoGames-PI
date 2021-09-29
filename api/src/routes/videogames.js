const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const {YOUR_API_KEY} = process.env;
const {Genre, Videogame} = require('../db')


// GET https://api.rawg.io/api/games
const getApiInfo = async () => {
    const resAxios = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`);
    const { results } = resAxios.data ;    
    if (results.length > 0) {

        let response = await results.map((result) => {
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

// GET https://api.rawg.io/api/genres

router.get('/genres', async (req, res) => {

    try {
        let genres = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
        genres = genres.data.results;
    
        const mapGeneros = genres.map(e => {
            return {
                id: e.id,
                name: e.name
            }
        })
        res.json(mapGeneros)
    }
    catch(e){
        res.send(e)
    }

})



// GET https://api.rawg.io/api/games/{id}
const getApiById = async (id) => {
const resAxios = await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
let response = resAxios.data
    return [{
        id: response.id,
        name: response.name,
        released: response.released,
        image: response.background_image,
        rating: response.rating,
        platforms: response.platforms.map(e => e.platform.name),
        genres: response.genres.map(e => e.name),
    }]
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

router.get('/', async (req, res) => {
    const { name } = req.query
    if (name) {
        const infoByName = await getInfoByName(name)
        res.json(infoByName);
    }
    else{
        const allDate = await getAllInfo()   
        res.json(allDate);
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
        const infoByID = await getApiById(id);
        res.json(infoByID);    
})


module.exports = router;