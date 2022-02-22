import React from 'react';
import style from './game-page.module.scss'
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux";
import GameCover from "../game-cover/GameCover";
import {GamesType} from "../../Pages/home-page";
import {Genre} from "../genre";
import {GameBuy} from "../game-buy";

export const GamePage = () => {
    const game = useSelector<RootStateType, GamesType>(state => state.games.currentGame)
    if (!game) return null
    return (
        <div className={style.container}>
            <h2 className={style.main}>{game.title}</h2>
            <div className={style.content}>
                <div className={style.leftContent}>
                    <iframe

                            src={game.video}
                            title={'Youtube video'}
                    frameBorder={'0'}
                            className={style.iframe}>
                    </iframe>
                </div>

                <div className={style.rightContent}>
                    <GameCover game={game}/>
                    <p>{game.description}</p>
                    {game.genres.map(genre =>
                        <Genre key={ genre} genre={genre}/>)}

                    <div className={style.buyPageGame}>
                    <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

