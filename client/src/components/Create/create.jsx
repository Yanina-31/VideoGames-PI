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
        // console.log(state)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const game = state
        await submitPost(state)
        // console.log(state)
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
                        {
                        genres && genres.map(e => <div><input type="checkbox" name="genres" onChange={(evt)=>handleGenres(evt)} value={e.name} /><label>{e.name}</label></div>)
                        }
                        <input type="text" name="genres" className={s.input} onChange={(e)=>handleGenres(e)} />
                    </div>

                    <div className={s.platforms}> 
                        <label>Platforms: </label>
                        {
                            platforms && platforms.map(e => <div><input type="checkbox" name="platforms" onChange={(evt)=>handlePlatforms(evt)} value={e.name} /><label>{e.name}</label></div>)
                        }

                        {/* <input type="text" name="platforms" className={s.input} onChange={(e)=>handleChange(e)} /> */}
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