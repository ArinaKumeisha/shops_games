import React from 'react';
import style from './header.module.scss'
import {Link} from "react-router-dom";
import {CartBlock} from "../cart-block";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <Link to={'/'} className={style.storeTitle}>Game Store</Link>
            </div>

            <div className={style.cart} >
                <CartBlock/>
            </div>

        </div>
    );
};
