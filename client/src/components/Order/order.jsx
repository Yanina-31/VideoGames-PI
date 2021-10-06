import React, {useRef} from "react";
import {connect} from 'react-redux'
import s from './order.module.css'
import {ordenAlfabetico, buscarPorGenero, buscarPorRating} from '../../Redux/actions'

function Order({ordenAlfabetico}){

    let miRef = useRef(null);
    let GenRef = useRef(null);
    let RatRef = useRef(null);

    function cambiarEstado(){
        ordenAlfabetico(miRef.current.value)
    }

    function OrderGenre(){
        buscarPorGenero(GenRef.current.value)
    }
    function OrderRating(){
        buscarPorRating(RatRef.current.value)
    }


    return (
        <div className={s.container}>
            <div className={s.containers}>
                <label>Filter Origin</label>
                <select className={s.select}>
                    <option className={s.inputOrder} selected>All</option>
                    <option value="creados">Created</option>
                    <option value="api">Api</option>
                </select>
            </div>
            <div className={s.containers}>
                <label>Alphabetical Order</label>
                <select className={s.select} ref={miRef} onChange={cambiarEstado}>
                    <option selected>All</option>
                    <option value="A - Z">A - Z</option>
                    <option value="Z - A">Z - A</option>
                </select>
            </div>
            <div className={s.containers}>
                <label>Filter Genre</label>
                <select className={s.select} ref={GenRef} onChange={OrderGenre}>
                <option selected>All</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Casual">Casual</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Racing">Racing</option>
                    <option value="Massively Multiplayer">Massively Multiplayer</option>
                    <option value="Sports">Sports</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Family">Family</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Educational">Educational</option>
                    <option value="Card">Card</option>
                </select>
            </div>
            <div className={s.containers}>
                <label>Filter Rating</label>
                <select className={s.select} ref={RatRef} onChange={OrderRating}>
                    <option selected >Default</option>
                    <option value="Asc">Asc</option>
                    <option value="Desc">Desc</option>
                </select>
            </div>
        </div>
    )
}

export default connect (null, {ordenAlfabetico, buscarPorGenero})(Order)