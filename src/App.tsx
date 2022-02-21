import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from './components/header'
import {HomePage} from './Pages/home-page'
import {GamePage} from "./components/game-page";
import {OrderPage} from "./components/order-page";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/homePage/:title'} element={<GamePage/>}/>
                <Route path={'/order'} element={<OrderPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
