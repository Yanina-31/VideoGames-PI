import React, {useState} from "react";
// import { NavLink } from "react-router-dom";
import s from './create.module.css';
import { connect } from "react-redux";
import {submitPost} from "../../Redux/actions.jsx";
import {useHistory} from 'react-router-dom'

function Create({submitPost}){   
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
        genre: [],
        platforms: [],
        description: ''
    })

    let myHistory = useHistory()

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
            genre: state.genre.includes(e.target.value) ? state.genre.filter(el => el !== e.target.value) : state.genre.concat(e.target.value)
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
            return alert("Missing add the name" + " " + "(Falta agregar el nombre)")
        }
        if(state.released == ''){
            return alert("Missing add game release date" + " " + "(Falta agregar la fecha de lanzamiento de juego)")
        }
        if(state.rating == 0 || state.rating == '' || state.rating < 1 || state.rating > 5 || state.rating == NaN){
            return alert("The rating must be between 1 and 5" +  " " + "(El rating debe ser entre 1 y 5)")
        }
        if(state.image == ''){
            return alert("Missing add the URL of the image" + " " + "(Falta agregar el URL de la imagen)")
        }
        if(state.description == '' || state.description.length < 15){
            if(state.description == '') return alert("Missing add description" + " " + "(Falta agregar descripci??n)")
            if(state.description.length < 15) return alert("Description must be at least 15 characters" + " " + "(La descripci??n debe tener al menos 15 caracteres)")
        }
        if(state.genre == ''){
            return alert("Need to add genres" + " " + "(Faltan agregar generos)")
        }
        if(state.platforms == ''){
            return alert("Add platforms" + " " + "(Falta agregar plataformas)")
        }
        // const game = state
        await submitPost(state)
        console.log(state)
        myHistory.push("/app/home")
        alert("The game was created" + " " + "(Se creo el juego)")
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
                        <input type="text" name="rating" className={s.input} onChange={(e)=>handleRating(e)} />
                    </div>


                    <div className={s.image}>
                        <label>Image url: </label>
                        <input type="url" name="image" className={s.input} onChange={(e)=>handleChange(e)} />
                    </div>
                    
                    <div className={s.genre}>
                        <label>Genres: </label>
                        <div className={s.gen}><input value="Action" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Action</label></div>
                        <div className={s.gen}><input value="Indie" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Indie</label></div>
                        <div className={s.gen}><input value="Strategy" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Strategy</label></div>
                        <div className={s.gen}><input value="Adventure" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Adventure</label></div>
                        <div className={s.gen}><input value="RPG" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>RPG</label></div>
                        <div className={s.gen}><input value="Shooter"type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Shooter</label></div>
                        <div className={s.gen}><input value="Casual" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Casual</label></div>
                        <div className={s.gen}><input value="Simulation"type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Simulation</label></div>
                        <div className={s.gen}><input value="Arcade" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Arcade</label></div>
                        <div className={s.gen}><input value="Puzzle" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Puzzle</label></div>
                        <div className={s.gen}><input value="Platformer" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Platformer</label></div>
                        <div className={s.gen}><input value="Racing" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Racing</label></div>
                        <div className={s.gen}><input value="Massively Multiplayer" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Massively Multiplayer</label></div>
                        <div className={s.gen}><input value="Fighting" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Fighting</label></div>
                        <div className={s.gen}><input value="Sports" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Sports</label></div>
                        <div className={s.gen}><input value="Family" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Family</label></div>
                        <div className={s.gen}><input value="Board Games" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Board Games</label></div>
                        <div className={s.gen}><input value="Educational" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Educational</label></div>
                        <div className={s.gen}><input value="Card" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Card</label></div>
                    </div>

                    <div className={s.platforms}> 
                        <label>Platforms: </label>
                        <div className={s.pla}><input value="PlayStation 4" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PS4</label></div>
                        <div className={s.pla}><input value="PlayStation 5" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PS5</label></div>
                        <div className={s.pla}><input value="PC" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PC</label></div>
                        <div className={s.pla}><input value="SEGA" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>SEGA</label></div>
                        <div className={s.pla}><input value="NINTENDO 64" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>NINTENDO 64</label></div>
                        <div className={s.pla}><input value="Nintendo Switch" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>NINTENDO SWITCH</label></div>
                        <div className={s.pla}><input value="ATARI" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>ATARI</label></div>
                        <div className={s.pla}><input value="Xbox One" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>XBOX ONE</label></div>
                        <div className={s.pla}><input value="Xbox 360" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>XBOX X</label></div>
                        <div className={s.pla}><input value="GAME BOY ADVANCED" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>GAME BOY ADVANCED</label></div>
                        <div className={s.pla}><input value="IOS" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>IOS</label></div>
                        <div className={s.pla}><input value="Linux" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>LINUX</label></div>
                        <div className={s.pla}><input value="Android" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>ANDROID</label></div>
                        <div className={s.pla}><input value="WEB" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>WEB</label></div>
                        <div className={s.pla}><input value="PlayStation" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PLAYSTATION</label></div>
                    </div>
                    <div className={s.description}>
                        <label>Description: </label>
                        <div>
                            <textarea type="text" name="description" cols="40" rows="6" className={s.desc} onChange={(e)=>handleChange(e)} />
                        </div>
                    </div>
                    <button  type='submit' className={s.button}>Create Game</button>
                    {/* <div className={s.info}></div> */}
                </div>
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