import React from 'react';
import {GamesType} from "../../Pages/home-page";
import style from './game-item.module.scss'
import {GameBuy} from "../game-buy";
import {Genre} from "../genre";
import GameCover from "../game-cover/GameCover";

export type PropsGamesType = {
    game: GamesType
}

export const GameItem = (props: PropsGamesType) => {
    const {game} = props
    return (
        <div className={style.container}>
            <div className={style.details} key={game.id}>
                <GameCover game={game}/>

                <span className={style.title}>{game.title}</span>

                <div className={style.genre}>{game.genres.map((genre) => (
                    <Genre key={genre} genre={genre}/>))}
                </div>
                <div className={style.buy}>
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>)
}








