// import React, { useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// // import { filter, getDetail } from '../../actions/index.js'
// import style from './cardDetail.module.css'
// import logo from '../../assets/logo4.png'

// export default function CardDetail(props) {
//     const dispatch = useDispatch()
//     const game = useSelector(state => state.detail)
//     useEffect(() => {
//         dispatch(getDetail(props.match.params.id))
//     }, [dispatch])
//     console.log(game)
//     return (
//         <div className={style.detailBackground}>
//                 <div>
//                     <NavLink className={style.rechargeHome} to='/home'>
//                         <img className={style.logoDetail} src={logo} alt='logo not found'/>
//                     </NavLink>
//                 </div>
//             <div className={style.navBarDetail}>
//                 <h1 className={style.detailName}>{game.name}</h1>
//                 <NavLink className={style.backHome} to='/home'>Back</NavLink>
//             </div>
//             <div className={style.ctnDetail}>
//                 {game.createdInDb ?
//                     <img className={style.detailImg} src={game.image} alt='img not found' />
//                     :
//                     <img className={style.detailImg} src={game.image} alt='img not found' />
//                 }
//                 <div className={style.ctnGenre}>
//                     <h4 className={style.titleGenre}>Genres</h4>
//                     {game.genres?.map(e =>
//                     game.createdInDb ?
//                         <p className={style.detailGenres}>{e.genres}</p>
//                         :
//                         <p className={style.detailRelease}>{game.genres}</p>
//                     )}
//                 </div>
//                 <div className={style.ctnRelease}>
//                     <h4 className={style.titleRelease}>Release</h4>
//                     {game.createdInDb ?
//                         <p className={style.detailRelease}>{game.released}</p>
//                         :
//                         <p className={style.detailRelease}>{game.released}</p>
//                     }
//                 </div>
//                 <div className={style.ctnRating}>
//                     <h4 className={style.titleRating}>Rating</h4>
//                     <p className={style.detailRating}>{game.rating}</p>
//                 </div>
//                 <div className={style.ctnPlatforms}>
//                     <h4 className={style.titlePlatforms}>Platforms</h4>
//                     {game.platforms?.map(e =>
//                         game.platforms ?
//                             <p className={style.detailPlatforms}>{e}</p>
//                             : 
//                             <p className={style.detailPlatforms}>{e.platforms.name}</p>
//                     )}
//                 </div>
//             </div>
//             <div className={style.ctnDescription}>
//                 <h4 className={style.titleDescription}>Description</h4>
//                 {!game.description ?  
//                     <p className={style.detailDescription}>{game.description}</p>
//                     :
//                     <p className={style.detailDescription}>{game.description}</p>
//                 }
//             </div>
//         </div>
//     )
// }