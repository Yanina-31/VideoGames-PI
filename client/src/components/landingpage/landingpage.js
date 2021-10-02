import React from 'react'
import { Link } from 'react-router-dom'
import style from './landingpage.module.css'

function LandingPage() {
    return (
        <div className={style.cover}>
            <div className={style.landing}>
                <h1 className={style.yani}>Welcome to Yani's video game app</h1>
                <Link to='/home'>
                    <button className={style.button}>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage