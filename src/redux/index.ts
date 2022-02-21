import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/cartReducer";
import gameItemReducer from "./game-item/gameItemReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer, // т е создали стор, где cartReducer это тот редюсер с 2 функциями удаления и добавления в корзину
        games: gameItemReducer,
    },
})
export type RootStateType = ReturnType<typeof store.getState>

// не забудь обернуть провайдером App в файле index.ts!!!