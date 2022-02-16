import React, {useState} from 'react';
import style from './cart-block.module.scss'
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux";
import {GamesType} from "../../Pages/home-page";
import {CartMenu} from "../cart-menu";
import {sumFun} from "../../util/func";
import {BiCart} from "react-icons/bi";


export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector<RootStateType, GamesType[]>(state => state.cart.itemsInCart)
    const totalPrice = sumFun(items)// общая сумма цен

    return (
        <div className={style.cartBlock}>
            <div className={style.block}>
                <div className={style.length} onClick={()=>setIsCartMenuVisible(!isCartMenuVisible)}>{items.length}</div>
           <BiCart size={30} className={style.icon}  onClick={()=>setIsCartMenuVisible(!isCartMenuVisible)}/>{/*иконка корзинки из библиотеки*/}
            <span className={style.price}>{totalPrice > 0 ? totalPrice : ''} </span>
            </div>
            {isCartMenuVisible  ? <CartMenu items={items}/> : ''}

        </div>
    );
};

