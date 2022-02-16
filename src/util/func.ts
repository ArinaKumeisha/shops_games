import {GamesType} from "../Pages/home-page";

export const sumFun = (items: GamesType[]) => items.reduce((a,b)=>  a+=b.price,0) // общая сумма цен