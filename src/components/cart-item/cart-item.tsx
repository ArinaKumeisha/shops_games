import React from 'react';
import style from './cart-item.module.scss'

type PropsType = {
    title: string
    id: any
    price: number
}
const CartItem = ({
                      title,
                      id, price
                  }: PropsType) => {

    return (
        <div className={style.cartItem}>
            <span> {title} </span>
            <span style={{fontSize: '22px'}}>
                price: {price} руб </span>
        </div>
    );
};

export default CartItem;