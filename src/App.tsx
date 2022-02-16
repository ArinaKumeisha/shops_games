import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from './components/header'
import {HomePage} from './Pages/home-page'
import {CartBlock} from "./components/cart-block";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                {/*<Route path={'/'} element={<CartBlock/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;
