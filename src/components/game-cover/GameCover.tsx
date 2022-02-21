import React from 'react';
import style from "./game-cover.module.scss";
import {PropsGamesType} from "../game-item";

const GameCover = (props: PropsGamesType) => {
    const {game} = props
    return (
        <div>
            <img src={game.image} className={style.image} alt={'game'}/>
        </div>
    );
};

export default GameCover;