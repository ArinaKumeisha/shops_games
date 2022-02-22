import React from 'react';
import style from './order-page.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {GamesType} from "../../Pages/home-page";
import {RootStateType} from "../../redux";
import {sumFun} from "../../util/func";
import GameCover from "../game-cover/GameCover";
import {deleteItemFromCart} from "../../redux/cart/cartReducer";
import {AiOutlineCloseCircle} from "react-icons/ai";

export const OrderPage = () => {
    const items = useSelector<RootStateType, GamesType[]>(state => state.cart.itemsInCart)
    const dispatch = useDispatch()


    return (
        <div className={style.container}>

            <div className={style.one}>

                {items.map(item => {
                    return (
                        <div key={item.id} className={style.item}>
                            <div className={style.image}>
                                <GameCover game={item}/>
                            </div>
                            <h2>название: {item.title}</h2>
                            <h2>цена: {item.price}руб</h2>

                            <AiOutlineCloseCircle
                                className={style.delete}
                                size={30}
                                onClick={() => dispatch(deleteItemFromCart(item.id))}/>
                        </div>
                    )
                })}

                <div className={style.amount}>
                    {items.length === 0 ? <h2>Ваша Корзина пуста</h2> :
                        <h2>Итого {items.length} товара (ов) на сумму {sumFun(items)}руб</h2>}
                </div>
            </div>


        </div>
    );
};

