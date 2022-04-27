import React, {useState} from 'react'
import style from './Search.module.scss'
import BedIcon from '@mui/icons-material/Bed';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import SearchIcon from '@mui/icons-material/Search';
import classnames from "classnames/bind";
const Search = () => {
    const [navBarIsChosen,setNavBarIsChosen]=useState('hotel')
    const navBarHotelIsChosenHandler = () =>{
        setNavBarIsChosen('hotel')
    }
    const navBarCarIsChosenHandler = () =>{
        setNavBarIsChosen('car')
    }
    const cn = classnames.bind(style)
    return (
        <div className={style.searchWrapper}>
            <div className={style.searchTitleWrapper}>
                <div className={style.title}>Welcome to Travel</div>
                <div className={style.titleDetails}>Log in to access exclusive travel benefits, enjoy selected offers and pay with your Membership Rewards® points.</div>
                <div className={style.titleDetails}>You’ll also earn extra points when you book with us.</div>
            </div>
            <div className={style.searchContentWrapper}>
                <div className={style.searchNavigationBarWrapper}>
                    <div className={cn(style.searchNavButton, {selected:navBarIsChosen==='hotel'})} onClick={navBarHotelIsChosenHandler}>
                        <BedIcon/>
                        <div className={style.searchNavButtonTitle}>Hotel</div>
                    </div>
                    <div className={cn(style.searchNavButton,{selected:navBarIsChosen==='car'})} onClick={navBarCarIsChosenHandler}>
                        <DirectionsCarFilledOutlinedIcon/>
                        <div className={style.searchNavButtonTitle}>Car</div>
                    </div>
                </div>
                {navBarIsChosen==='hotel' &&<div className={style.searchHotelWrapper}>
                    <div className={style.hotelDestinationAndDates}>
                        <div className={style.searchDestination}>
                            <div className={style.searchDestinationTitle}>Destination</div>
                            <div className={style.searchDestinationInputWrapper}>
                                <SearchIcon/>
                                <input placeholder={'Where are you going?'}></input>
                            </div>
                        </div>
                        <div className={style.searchDatesWrapper}>
                            <div className={style.searchDatesTitle}>checkin</div>
                            {/*<div >calendar</div>*/}
                        </div>
                        <div>checkout</div>
                    </div>
                    <div>second line Room</div>
                    <div>third line Search Button</div>
                </div>}
                {navBarIsChosen==='car' && <div className={style.searchCarWrapepr}>
                    car
                </div>}
            </div>
        </div>
    )
};
export const x = 10;
export const y = 20;
export default Search;