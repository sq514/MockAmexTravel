import React from 'react'
import style from './HomePage.module.scss'
import Search from "./Search";
const HomePage = () => {
    return (
        <div>
            <div className={style.header}>
                tetstst
                <div className={style.text}>TRAVEL</div>
            </div>
            <Search/>
        </div>
    )
};

export default HomePage;