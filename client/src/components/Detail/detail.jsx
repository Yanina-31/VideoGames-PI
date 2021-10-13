import React from "react";
import {connect} from 'react-redux';
import s from './detail.module.css';

function Details({videogame}){

    return (
        <div className={s.container}>
            {
                videogame && videogame.map(e =>
                <div key={e.id}>
                    <div className={s.texts}>
                        <h1>{e.name}</h1>
                        <img className={s.detailImg} src={e.image} alt='Imagen dañada'/>
                        <p>Rating:  {e.rating}</p>
                        <p>Released:  {e.released}</p>
                        {/* <p className={s.genres}><span> Genres: </span> {e.genres.map((el, i) => { if(i < 3)return <span className={s.genres} key={i}>{el.name}</span>})}</p> */}
                        <p className={s.ctnGenresCard}> Genres: {e.genres.map(ele=><><span className={s.span}>{ele.name}</span></>)}</p> 
                        <p>Platforms:  {e.platforms.map(el => <span className={s.span}>{el}</span>) }</p>
                        {/* <p>Platforms:  {e.platforms.map((e, i) => <span key={i+100}>{e.platforms.name}</span>)}</p> */}
                        <p className={s.detailDescription}>Description:  {e.description}</p>
                    </div>
                </div>)
            }
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        videogame: store.id
    }
}

export default connect(mapStateToProps)(Details)