import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {searchGames,gameById} from '../../Redux/actions.jsx';
import s from './card.module.css'
import {NavLink} from 'react-router-dom';
import Paginado from '../Paginado/paginado.jsx'
// import loading from '../../assets/pacman1111.gif'


function Card({searchGames, videogames, gameById}){
    
    useEffect(() => {
        searchGames()
    },[])

    const [currentPage, setCurrentPage] = useState(1)
    const totalVideogames = 15

    const totalPages = Math.floor(videogames.length / totalVideogames)//100/15

    let games = videogames.slice(currentPage*totalVideogames-totalVideogames, currentPage*totalVideogames)
                                 //(pag 1 indice 0) 2*15-15 =15      // 2*15 = 30
                                 
    function pages(num){
        setCurrentPage(num)
    }

    return(
        <div>
        <div className={s.cards}>
            { 
            // videogames.length ? videogames.map(el =>
            games.length ? games.map(e=> <div className={s.card} key={e.id} onClick={()=>gameById(e.id)}>
               <NavLink className={s.NavLink} to={`/app/${e.id}`}>
               <p className={s.title}>{e.name}</p>
               <img className={s.image} src={e.image} alt='Imagen de videogames'/>
               <p className={s.ctnGenresCard}>Release: {e.released}</p>  
                 <div className={s.cardLow}>
                 <p className={s.genres}><span> Genres: </span> {e.genres.map((ele, i) => { if(i < 3)return <span className={s.genres} key={i}>{ele.name}</span>})}</p>
                    <p className={s.ctnGenresCard}> Rating: {e.rating}</p>
                    </div></NavLink>
               </div>):<div className={s.contLoading}>
                <img src={"https://i.gifer.com/origin/31/31a27926c57df380d818c625323ca69e_w200.webp"} alt='Gif Cargando' className={s.loading}/>
                </div>
            } 
        </div> 
        <Paginado totalPages={totalPages} pages={pages}/>
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