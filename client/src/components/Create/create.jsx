import React, {useState} from "react";
// import { NavLink } from "react-router-dom";
import s from './create.module.css';
import { connect } from "react-redux";
import {submitPost} from "../../Redux/actions.jsx";

function Create({submitPost, genres, platforms}){
   
    // const handleClick= ()=>{
    //     const yani = {
            
    //             name : "yani2",
    //             description: "buenas PI",
    //              released: "1987-03-31",
    //             image: "https://as.com/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
    //              rating: 5.4,
    //              platforms: "xbox, pc, play",
    //             genre: ["Action", "Educational"]
            
    //     }
    //     submitPost(yani)
    //     console.log(yani)
    // }
    const [state, setState] = useState({
        name: '',
        released: '',
        rating: 0,
        image: '',
        genres: [],
        platforms: [],
        description: ''
    })

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        
    }

    function handleRating(e){
        setState({
            ...state,
            rating: parseInt(e.target.value)
        })
    }
    function handleGenres(e){
        setState({
            ...state,
            // genre: [e.target.value]
            genres: state.genres.includes(e.target.value) ? state.genres.filter(el => el !== e.target.value) : state.genres.concat(e.target.value)
        })
        // console.log(state)
    }

    // async function handleSubmit(e){
    //     e.preventDefault()
    //     submitPost(state)
    //     await console.log(state)
    // }
    function handlePlatforms(e){
        setState({
            ...state,
            platforms: state.platforms.includes(e.target.value) ? state.platforms.filter(el => el !== e.target.value) : state.platforms.concat(e.target.value)
        })
        console.log(state)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(state.name == ''){
            return alert("Falta el nombre")
        }
        if(state.released == ''){
            return alert("Falta la fecha de lanzamiento de juego")
        }
        if(state.rating == 0 || state.rating == '' || state.rating < 1 || state.rating > 5){
            return alert("El rating debe ser entre 1 y 5")
        }
        if(state.image == ''){
            return alert("Falta la imagen")
        }
        if(state.description == '' || state.description.length < 15){
            if(state.description == '') return alert("Falta la descripción")
            if(state.description.length < 15) return alert("La descripcióin debe tener al menos 15 caracteres")
        }
        if(state.genres == ''){
            return alert("Faltan los generos")
        }
        if(state.platforms == ''){
            return alert("Faltan las plataformas")
        }
        // const game = state
        await submitPost(state)
        console.log(state)
    }

    return (
        <div className={s.containerFather}>
            {/* <button className={s.btnVolver}><NavLink to='/app/home'>Volver</NavLink></button> */}
            <form onSubmit={(e)=>handleSubmit(e)}>
                
                <div className={s.container}>

                    <h3 className={s.titulo}>Create new Videogame</h3>

                    <div className={s.name}>
                        <label>Name of the game: </label>
                        <input type="text" name="name" className={s.input} onChange={(e)=>handleChange(e)} />
                    </div>

                    <div className={s.released}>
                        <label>Release: </label>
                        <input type="date" name="released" className={s.input} onChange={(e)=>handleChange(e)} />
                    </div>


                    <div className={s.rating}>
                        <label>Rating: </label>
                        <input type="number" name="rating" className={s.input} onChange={(e)=>handleRating(e)} />
                    </div>


                    <div className={s.image}>
                        <label>Image url: </label>
                        <input type="url" name="image" className={s.input} onChange={(e)=>handleChange(e)} />
                    </div>

                    <div className={s.description}>
                        <label>Description: </label>
                        <textarea type="text" name="description" cols="40" rows="6" className={s.input} onChange={(e)=>handleChange(e)} />
                    </div>

                    
                    <div className={s.genres}>
                        <label>Genres: </label>
                       
                        <div className={s.gen}><input value="Action" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Action</label></div>
                        <div className={s.gen}><input value="Indie" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Indie</label></div>
                        <div className={s.gen}><input value="Strategy" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Strategy</label></div>
                        <div className={s.gen}><input value="Adventure" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Adventure</label></div>
                        <div className={s.gen}><input value="RPG" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>RPG</label></div>
                        <div className={s.gen}><input value="Shooter"type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Shooter</label></div>
                        <div className={s.gen}><input value="Casual" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Casual</label></div>
                        <div className={s.gen}><input value="Simulation"type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Simulation</label></div>
                        <div className={s.gen}><input value="Arcade" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Arcade</label></div>
                        <div className={s.gen}><input value="Puzzle" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Puzzle</label></div>
                        <div className={s.gen}><input value="Platformer" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Platformer</label></div>
                        <div className={s.gen}><input value="Racing" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Racing</label></div>
                        <div className={s.gen}><input value="Massively Multiplayer" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Massively Multiplayer</label></div>
                        <div className={s.gen}><input value="Fighting" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Fighting</label></div>
                        <div className={s.gen}><input value="Sports" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Sports</label></div>
                        <div className={s.gen}><input value="Family" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Family</label></div>
                        <div className={s.gen}><input value="Board Games" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Board Games</label></div>
                        <div className={s.gen}><input value="Educational" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Educational</label></div>
                        <div className={s.gen}><input value="Card" type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)}/><label>Card</label></div>
                    </div>

                    <div className={s.platforms}> 
                        <label>Platforms: </label>
                        <div className={s.pla}><input value="PS4" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PS4</label></div>
                        <div className={s.pla}><input value="PS5" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PS5</label></div>
                        <div className={s.pla}><input value="PC" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PC</label></div>
                        <div className={s.pla}><input value="SEGA" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>SEGA</label></div>
                        <div className={s.pla}><input value="NINTENDO 64" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>NINTENDO 64</label></div>
                        <div className={s.pla}><input value="NINTENDO SWITCH" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>NINTENDO SWITCH</label></div>
                        <div className={s.pla}><input value="ATARI" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>ATARI</label></div>
                        <div className={s.pla}><input value="XBOX ONE" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>XBOX ONE</label></div>
                        <div className={s.pla}><input value="XBOX X" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>XBOX X</label></div>
                        <div className={s.pla}><input value="GAME BOY ADVANCED" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>GAME BOY ADVANCED</label></div>
                        <div className={s.pla}><input value="IOS" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>IOS</label></div>
                        <div className={s.pla}><input value="LINUX" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>LINUX</label></div>
                        <div className={s.pla}><input value="ANDROID" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>ANDROID</label></div>
                        <div className={s.pla}><input value="WEB" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>WEB</label></div>
                        <div className={s.pla}><input value="PLAYSTATION" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PLAYSTATION</label></div>
                         
                    </div>

                    <div className={s.info}></div>

                </div>
                <button  type='submit' className={s.button}>Create Game</button>
                {/* <NavLink className={s.NavLink} to='/app/home'>Back</NavLink> */}

            </form>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        resPost: store.resPost,
        genres: store.genres,
        platforms: store.platforms
    }
}

export default connect(mapStateToProps, {submitPost})(Create)