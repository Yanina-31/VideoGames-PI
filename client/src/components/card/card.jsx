import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {searchGames,gameById} from '../../Redux/actions.jsx';
import s from './card.module.css'
import {NavLink} from 'react-router-dom';
import Paginado from '../Paginado/paginado.jsx'



function Card({searchGames, videogames, name, gameById}){
    useEffect(() => {
        searchGames()
    },[])

    function game(){
        if(name.length > 0) return name;
        else return videogames
    }
    const [currentPage, setCurrentPage] = useState(1)
    const [totalVideogames, setTotalVideogames] = useState(15)

    const totalPages = Math.floor(videogames.length / totalVideogames)

    let games = videogames.slice(currentPage*totalVideogames-15, currentPage*totalVideogames)

    function pages(num){
        setCurrentPage(num)
    }

    return(
        <div>
        <div className={s.cards}>
            { 
                // videogames.length ? videogames.map(e =>
            games.map(e=> <div className={s.card} onClick={()=>gameById(e.id)}>
               <NavLink className={s.NavLink} to={`/app/${e.id}`}>
               <p className={s.title}>{e.name}</p>
               <img className={s.image} src={e.image} alt='Imagen de videogames'/>
               <p className={s.ctnGenresCard}>Release: {e.released}</p>  
                 <div className={s.cardLow}>
                    <p className={s.ctnGenresCard}> Genres: {e.genres.map(e=><span className={s.span}>{e}</span>)}</p> 
                    <p className={s.ctnGenresCard}> Rating: {e.rating}</p>
                    </div></NavLink>
               </div>)
                // ):<img src={loading} alt='Gif Cargando'/>
            } 
        </div>
        <Paginado totalPages={totalPages} totalVideogames={totalVideogames} pages={pages}/>
        </div>
    )
}



const mapStateToProps = (store) => {
    return{
        videogames: store.videoGames,
        name: store.name,
    }
} 

export default connect(mapStateToProps, {searchGames, gameById})(Card);