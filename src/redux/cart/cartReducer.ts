import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GamesType} from "../../Pages/home-page";


const cartSlice = createSlice({// эта ф-я предоставляет нам редюсеры, экшены и т.д для упрощения для toolkit
    name: 'CartSlice',
    initialState: {
        itemsInCart: [] as GamesType[] /*itemsCart это наши игры, которые мы будем добавлять в корзину*/
    },
    reducers: {  /*здесь по сути будут определены наши экшены - добавить и удалять элементы из корзины*/
        setItemInCart: (state, action: PayloadAction<GamesType>) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action:PayloadAction<GamesType[]> ) => {
            state.itemsInCart = state.itemsInCart.filter(el => el.id !==action.payload)
        }
    }
})
export const {setItemInCart, deleteItemFromCart } = cartSlice.actions //export reducerov делается именно так!
export default cartSlice.reducer;