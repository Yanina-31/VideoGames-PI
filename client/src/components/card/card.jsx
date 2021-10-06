import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {searchGames} from '../../Redux/actions.jsx';
import s from './card.module.css'


function Card({searchGames, videogames, name}){
    useEffect(() => {
        searchGames()
    },[])

    function game(){
        if(name.length > 0) return name;
        else return videogames
    }


    return(
        <div className={s.cards}>
            { 
           game().map(e=> <div className={s.card}>
               <p className={s.title}>{e.name}</p>
               <img className={s.image} src={e.image} alt='Imagen de videogames'/>
               <div className={s.cardLow}>
                    <p className={s.ctnGenresCard}>Genres: {e.genres.name}</p>
                    <p className={s.ctnGenresCard}>Rating: {e.rating}</p>
                    </div>
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

export default connect(mapStateToProps, {searchGames})(Card);