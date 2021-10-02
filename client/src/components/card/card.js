import React from 'react'
import style from './card.module.css'


export default function Card ({name, image, genre, genres}) {
    return (
        <div className={style.card}>
            <h5 className={style.title}>{name}</h5>
            <img className={style.image} src={image} alt='img not found'/>
            <div className={style.ctnGenresCard}>
                {genre ? genre.map((e) => (
                    <h6 className={style.genres}>{`${e} `} </h6>
                    ))
                :
                genres.map((e) => (
                    <h6 className={style.genres}>{`${e.name} `} </h6>
                    ))
                }
            </div>
        </div>
    )
}


// import React from 'react'
// import './card.css'

// function Card({name, image, description}) {
//     return (
//         <body>
//     <div class="card">
//         <div class="name portada">
//             <img class="logo" src={image} alt=""/>-*
//             <img class="img-icon" src={image} alt=""/>
//             <h2>{name}</h2>
//         </div>
//         <div class="name info">
//             <h4>Description</h4>
//             <p>{description}</p>
//             <button>Más Información</button>
//         </div>
//     </div>
//     </body>
    //    <div className="card">
    //      <h3>{name}</h3>
            
    //     <img src={image} alt= "img not found"/>
    //      </div> 
//     )
    
// };


export {Card}