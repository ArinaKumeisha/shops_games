import React from 'react';
import {GamesType} from "../../Pages/home-page";
import style from './game-buy.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../redux/cart/cartReducer";
import styles from '../main/style.module.scss'
import {RootStateType} from "../../redux";

type PropsType = {
    game: GamesType
}
export const GameBuy: React.FC<PropsType> = props => {
    const {game} = props
    const items = useSelector<RootStateType, GamesType[]>(state => state.cart.itemsInCart)
    const isNewItem = items.some(el => el.id === game.id)
    const dispatch = useDispatch()
    const handler = (e: any) => {
        e.stopPropagation() //  останавливаем всплытие события( т е при нажатии кнопки нам НЕ НАДО проваливаться во внутрь карточки с игрой!)
        if (isNewItem) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game))
        }
    }

    return (
        <div>
            <span className={style.price}>{game.price}</span>
            <button onClick={handler} className={isNewItem ? styles.btnTrue : styles.btn}>
                {isNewItem ? 'удалить из корзины' : 'в корзину'}
            </button>

        </div>

    );
}

