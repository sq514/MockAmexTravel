import React from 'react'
import style from './HomePage.module.scss'
import Search from "./Search";
import Recommendations from "./Recommendations";
const HomePage = () => {
    return (
        <div>
            <div className={style.header}>
                <div className={style.text}>TRAVEL</div>
            </div>
            <Search/>
            <Recommendations/>
        </div>
    )
};

export default HomePage;