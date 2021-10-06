import React from 'react'
import { Link } from 'react-router-dom'
import s from './landingpage.module.css'

function LandingPage() {
    return (
        <div className={s.cover}>
            <div className={s.landing}>
                <h1 className={s.yani}>Welcome to Yani's video game app</h1>
                <Link to='/app/home'>
                    <button className={s.button}>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage