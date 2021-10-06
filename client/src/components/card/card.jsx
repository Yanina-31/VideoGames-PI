import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {searchGames,gameById} from '../../Redux/actions.jsx';
import s from './card.module.css'
import {NavLink} from 'react-router-dom';



function Card({searchGames, videogames, name, gameById}){
    useEffect(() => {
        searchGames()
    },[])

    function game(){
        if(name.length > 0) return name;
        else return videogames
    }
    console.log(videogames) 

    return(
        <div className={s.cards}>
            { 
           game().map(e=> <div className={s.card} onClick={()=>gameById(e.id)}><NavLink className={s.NavLink} to={`/app/${e.id}`}>
               <p className={s.title}>{e.name}</p>
               <img className={s.image} src={e.image} alt='Imagen de videogames'/>
               <p className={s.ctnGenresCard}>Release: {e.released}</p>  
                 <div className={s.cardLow}>
                    <p className={s.ctnGenresCard}> Genres: {e.genres}</p>   
                    <p className={s.ctnGenresCard}> Rating: {e.rating}</p>
                    </div></NavLink>
               </div>)
            }, 
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