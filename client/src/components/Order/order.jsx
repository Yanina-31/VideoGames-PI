import React, {useRef} from "react";
import {connect} from 'react-redux'
import s from './order.module.css'
import {ordenAlfabetico, buscarPorGenero, buscarPorRating, gamesDatabase} from '../../Redux/actions'

function Order({ordenAlfabetico, buscarPorGenero, buscarPorRating, gamesDatabase }){

    let miRef = useRef(null);
    let GenRef = useRef(null);
    let RatRef = useRef(null);
    let BaseRef = useRef(null);

    function cambiarEstado(){
        ordenAlfabetico(miRef.current.value)
    }

    function OrderGenres(){
        buscarPorGenero(GenRef.current.value)
    }
    function OrderRating(){
        buscarPorRating(RatRef.current.value)
    }
    function OrderDataBase(){
        gamesDatabase(BaseRef.current.value)
    }


    return (
        <div className={s.container}>
            <div className={s.containers}>
                <label>Filter Data Base</label>
                <select className={s.select} ref={BaseRef} onChange={OrderDataBase}>
                <option disabled selected>Select</option>
                <option>Yes</option>
                <option>All</option>
                </select>
            </div>
            <div className={s.containers}>
                <label>Alphabetical Order</label>
                <select className={s.select} ref={miRef} onChange={cambiarEstado}>
                    <option disabled selected>Select</option>
                    <option value="A - Z">A - Z</option>
                    <option value="Z - A">Z - A</option>
                </select>
            </div>
            <div className={s.containers}>
                <label>Filter Genres</label>
                <select className={s.select} ref={GenRef} onChange={OrderGenres}>
                <option disabled selected>Select</option>
                    <option value="Action">Action</option>
                    <option value="Indie">Indie</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Casual">Casual</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Racing">Racing</option>
                    <option value="Massively Multiplayer">Massively Multiplayer</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Sports">Sports</option>
                    <option value="Family">Family</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Educational">Educational</option>
                    <option value="Card">Card</option>
                </select>
            </div>
            <div className={s.containers}>
                <label>Filter Rating</label>
                <select className={s.select} ref={RatRef} onChange={OrderRating}>
                    <option disabled selected >Select</option>
                    <option value="Asc">Lower Score</option>
                    <option value="Desc">Higher Score</option>
                </select>
            </div>
        </div>
    )
}

export default connect (null, {ordenAlfabetico, buscarPorGenero, buscarPorRating, gamesDatabase})(Order)