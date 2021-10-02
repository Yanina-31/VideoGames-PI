import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import style from './form.module.css'
import { createGame, getGenres } from '../../actions/index.js'
import logo from '../../assets/logo4.png'
import sonic from '../../assets/mau.jpg'



export default function Form() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [id, setId] = useSelector(state => state.id)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [release, setRelease] = useState('')
    const [rating, setRating] = useState(0)
    const [genre, setGenre] = useState([])
    const [platforms, setPlatforms] = useState([])

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please, insert a name')
            return
        }
        if (!description) {
            alert('Please, insert the description of the game')
            return
        }
        if (platforms.length < 1) {
            alert('Please, insert the platforms where you can play the game')
            return
        }
        if (!rating || rating < 1 || rating > 5) {
            alert('Please, the rating must be a number between 1 - 5')
            return
        }
        if (genre.length < 1) {
            alert('Must select at least one Genre')
            return
        }
        if (!release) {
            alert('Please put the date of the release of the game')
            return
        }

        const game = {
            id:id,
            name: name,
            description: description,
            image: image,
            rating: rating,
            release: release,
            platforms: platforms,
            genre: genre
        }
        console.log(game)

        dispatch(createGame(game))
        e.target.reset()
        // setId('')
        setName('')
        setDescription('')
        setImage('')
        setRating(0)
        setRelease('')
        setPlatforms([])
        setGenre([])

        alert('Your game was created successfully!')
        history.push('/videogames')
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const handleRelease = (e) => {
        setRelease(e.target.value)
    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const handlePlatforms = (e) => {
        let flag = true
        platforms.forEach((c) => {
            if (e.target.value === c) {
                setPlatforms(platforms.filter(a => e.target.value !== a))
                return flag = false
            }
        })
        if (flag) {
            setPlatforms(platforms.concat(e.target.value))
        }
    }

    const handleGenres = (e) => {
        let flag = true
        genre.forEach((c) => {
            if (e.target.value === c) {
                setGenre(genre.filter(a => e.target.value !== a))
                return flag = false
            }
        })
        if (flag) {
            setGenre(genre.concat(e.target.value))
        }
    }



    const platformsName = ['PlayStation 4', 'PlayStation 5', 'PC', 'Xbox', 'PS Vita', 'Android', 'iOS', 'macOS']

    return (
        <div className={style.ctnBodyForm}>
            <div>
                <NavLink className={style.rechargeHome} to='/videogames'>
                    <img className={style.logoForm} src={logo} alt='logo not found' />
                </NavLink>
            </div>
            <div className={style.navBarForm}>
                <NavLink className={style.backHome} to='/videogames'>Back</NavLink>
                <h1 className={style.titleForm}>Create your own videogame!</h1>
            </div>
            <form className={style.bodyForm} onSubmit={(e) => { handleSubmit(e) }}>
                <div className={style.formSonic}>
                    <div className={style.ctnGenres}>
                        <h4 className={style.titleGenres}>Genres<span> *</span></h4>
                        {id.map((e) => {
                            return (
                                <div className={style.ctnBoxGenres} key={e.id}>
                                    <input
                                        className={style.checkboxGenres}
                                        type='checkbox'
                                        name='id'
                                        value={e.id}
                                        onChange={(e) => { handleGenres(e) }}
                                    />
                                    <label className={style.labelGenres} name={e}>{e.id}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div className={style.ctnInputs}>
                        <div className={style.ctnForm}>
                            <div className={style.optionForm}>
                                <label className={style.labelForm}>Name<span> *</span></label>
                                <input
                                    className={style.inputForm}
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={(e) => { handleName(e) }}
                                />
                            </div>
                        </div>
                        <div className={style.ctnForm}>
                            <div className={style.optionForm}>
                                <label className={style.labelForm}>Description<span> *</span></label>
                                <input
                                    className={style.inputForm}
                                    type='text'
                                    name='description'
                                    value={description}
                                    onChange={(e) => { handleDescription(e) }}
                                />
                            </div>
                        </div>
                        <div className={style.ctnFormDate}>
                            <div className={style.optionFormDate}>
                                <label className={style.labelFormDate}>Release<span> *</span></label>
                                <input
                                    className={style.inputFormDate}
                                    type='date'
                                    name='release'
                                    value={release}
                                    onChange={(e) => { handleRelease(e) }}
                                />
                            </div>
                        </div>
                        <div className={style.ctnForm}>
                            <div className={style.optionForm}>
                                <label className={style.labelForm}>Rating<span> *</span></label>
                                <input
                                    className={style.inputForm}
                                    type='number'
                                    name='rating'
                                    value={rating}
                                    onChange={(e) => { handleRating(e) }}
                                />
                            </div>
                        </div>
                        <div className={style.ctnForm}>
                            <div className={style.optionForm}>
                                <label className={style.labelForm}>Image</label>
                                <input
                                    className={style.inputForm}
                                    type='text'
                                    name='image'
                                    value={image}
                                    onChange={(e) => { handleImage(e) }}
                                />
                            </div>
                        </div>
                        <button className={style.buttonCreate} type='submit'>Create Game</button>
                    </div>
                    <div className={style.ctnCheckbox}>
                        <div className={style.ctnPlatforms}>
                            <h4 className={style.titlePlatforms}>Platforms<span> *</span></h4>
                            {platformsName.map((e, index) => {
                                return (
                                    <div className={style.ctnBoxPlatforms} key={index}>
                                        <input
                                            className={style.checkboxPlatforms}
                                            type='checkbox'
                                            name='platforms'
                                            value={e}
                                            onChange={(e) => { handlePlatforms(e) }}
                                        />
                                        <label className={style.labelPlatforms} name={e}>{e}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}