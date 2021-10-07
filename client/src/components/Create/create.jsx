// import React from "react";
// import { NavLink } from "react-router-dom";
// import s from './create.module.css';

// export default function Create(){

//     function formulario(e){
//         e.preventDefault()
//     }

//     return (
//         <div className={s.containerFather}>
//             <button className={s.btnVolver}><NavLink to='/app/home'>Back</NavLink></button>
//             <form onSubmit={()=>formulario(e)} action='/videogame' method="post">
                
//                 <div className={s.container}>

//                     <h3 className={s.titulo}>Create Videogame</h3>

//                     <div className={s.name}>
//                         <label>Name of the game</label>
//                         <input type="text" name="name" className={s.input} />
//                     </div>

//                     <div className={s.released}>
//                         <label>Released</label>
//                         <input type="date" name="released" className={s.input} />
//                     </div>


//                     <div className={s.rating}>
//                         <label>Rating</label>
//                         <input type="number" name="rating" className={s.input} />
//                     </div>


//                     <div className={s.image}>
//                         <label>URl de la imagen</label>
//                         <input type="url" name="image" className={s.input} />
//                     </div>

//                     <div className={s.genres}>
//                         <label>Genres</label>
//                         <input type="text" name="genres" className={s.input} />
//                     </div>

//                     <div className={s.platforms}>
//                         <label>Platforms</label>
//                         <input type="text" name="platforms" className={s.input} />
//                     </div>

//                     <div className={s.descripcion}>
//                         <label>Descripcion</label>
//                         <textarea type="text" name="descripcion" cols="40" rows="6" className={s.input} />
//                     </div>

//                     <div className={s.info}></div>

//                 </div>
//                     <button className={s.button}>Submit</button>

//             </form>
//         </div>
//     )
// }
