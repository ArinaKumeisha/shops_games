import {configureStore} from "@reduxjs/toolkit";
import reducer, {deleteItemFromCart, setItemInCart} from "./cart/cartReducer";
import cartReducer from "./cart/cartReducer";

export const store  = configureStore({
    reducer: {
        cart: cartReducer // т е создали стор, где cartReducer это тот редюсер с 2 функциями удаления и добавления в корзину
    },
})
export type RootStateType = ReturnType <typeof store.getState>

// не забудь обернуть провайдером App в файле index.ts!!!