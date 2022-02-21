import React from 'react';
import {GamesType} from "../../Pages/home-page";
import {sumFun} from "../../util/func";
import styles from '../main/style.module.scss';
import style from './cart-menu.module.scss'
import CartItem from "../cart-item/cart-item";


type PropsType = {
    items: GamesType[]
    onclick: () => void
}
export const CartMenu = (props: PropsType) => {
    const {items, onclick} = props;
    return (
        <div className={style.container}>

            <div className={style.titlePrise}>
                {items.length > 0 ? items.map((el, index) =>
                        <CartItem key={index}
                                  title={el.title}
                                  price={el.price}
                                  id={el.id}/>) :
                    'Корзина пуста'}
            </div>

            {
                items.length > 0 ?
                    <div className={style.cost}>
                        <div>
                            <span>Итого: </span>
                            <span>{sumFun(items)} </span>
                        </div>
                        <button onClick={onclick} className={styles.btn}>Оформить заказ</button>
                    </div>
                    : null
            }
        </div>

    );
};

