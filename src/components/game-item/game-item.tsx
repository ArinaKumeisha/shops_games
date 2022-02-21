import React from 'react';
import {GamesType} from "../../Pages/home-page";
import style from './game-item.module.scss'
import {GameBuy} from "../game-buy";
import {Genre} from "../genre";
import GameCover from "../game-cover/GameCover";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setCurrentGame} from "../../redux/game-item/gameItemReducer";

export type PropsGamesType = {
    game: GamesType
    image?: string
}

export const GameItem = (props: PropsGamesType) => {
    const {game} = props
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onclickHandler = () => {
        console.log(game.title)
        dispatch(setCurrentGame(game))
        return navigate(`/homePage/${game.title}`)
    }

    return (
        <div className={style.container} onClick={onclickHandler}>
            <GameCover game={game}/>

            <span className={style.title}>{game.title}</span>

            <div className={style.genre}>{game.genres.map((genre) => (
                <Genre key={genre} genre={genre}/>))}
            </div>

            <div className={style.buy}>
                <GameBuy game={game}/>
            </div>

        </div>)
}








