import React from 'react';
import style from './genre.module.scss'

type PropsType = {
    genre: string
}
export const Genre = (props: PropsType) => {
    const {genre} = props
    return (
            <span  className={style.itemGenre}>{genre}</span>

    );
};

