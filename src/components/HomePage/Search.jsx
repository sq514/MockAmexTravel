import React, {useState} from 'react'
import style from './Search.module.scss'
import BedIcon from '@mui/icons-material/Bed';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import SearchIcon from '@mui/icons-material/Search';
import classnames from "classnames/bind";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateRangeIcon from '@mui/icons-material/DateRange';

const Search = () => {
    const [navBarIsChosen, setNavBarIsChosen] = useState('hotel')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navBarHotelIsChosenHandler = () => {
        setNavBarIsChosen('hotel')
    }
    const navBarCarIsChosenHandler = () => {
        setNavBarIsChosen('car')
    }
    const cn = classnames.bind(style)
    const [roomSelectionState, setRoomSelectionState] = useState(false)
    const roomSelectionStateHandler = () => {
        setRoomSelectionState(!roomSelectionState)
    }
    const [adultNumber, setAdultNumber] = useState(1)
    const addAdultNumber = () => {
        setAdultNumber(adultNumber + 1)
    }
    const minusAdultNumber = () => {
        if (adultNumber > 1) setAdultNumber(adultNumber - 1)
    }

    const [childNumber, setChildNumber] = useState(0)
    const addChildNumber = () => {
        setChildNumber(childNumber + 1)
    }
    const minusChildNumber = () => {
        if (childNumber > 0) setChildNumber(childNumber - 1)
    }

    return (
        <div className={style.searchWrapper}>
            <div className={style.searchTitleWrapper}>
                <div className={style.title}>Welcome to Travel</div>
                <div className={style.titleDetails}>Log in to access exclusive travel benefits, enjoy selected offers
                    and pay with your Membership Rewards® points.
                </div>
                <div className={style.titleDetails}>You’ll also earn extra points when you book with us.</div>
            </div>
            <div className={style.searchContentWrapper}>
                <div className={style.searchNavigationBarWrapper}>
                    <div className={cn(style.searchNavButton, {navBarSelected: navBarIsChosen === 'hotel'})}
                         onClick={navBarHotelIsChosenHandler}>
                        <BedIcon/>
                        <div className={style.searchNavButtonTitle}>Hotel</div>
                    </div>
                    <div className={cn(style.searchNavButton, {navBarSelected: navBarIsChosen === 'car'})}
                         onClick={navBarCarIsChosenHandler}>
                        <DirectionsCarFilledOutlinedIcon/>
                        <div className={style.searchNavButtonTitle}>Car</div>
                    </div>
                </div>
                {navBarIsChosen === 'hotel' && <div className={style.searchHotelWrapper}>
                    <div className={style.hotelDestinationAndDates}>
                        <div className={style.searchDestination}>
                            <div className={style.searchDestinationTitle}>Destination</div>
                            <div className={style.searchDestinationInputWrapper}>
                                <SearchIcon/>
                                <input placeholder={'Where are you going?'}></input>
                            </div>
                        </div>
                        <div className={style.searchDatesWrapper}>
                            <div className={style.searchDatesTitle}>Checkin</div>
                            <div className={style.calendarWrapper}>
                                <DateRangeIcon/>
                                <DatePicker
                                    minDate={new Date()}
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}/>
                            </div>
                        </div>
                        <div className={style.searchDatesWrapper}>
                            <div className={style.searchDatesTitle}>Checkout</div>
                            <div className={style.calendarWrapper}>
                                <DateRangeIcon/>
                                <DatePicker
                                    startOpen={true}
                                    selected={endDate} onChange={(date) => setEndDate(date)}
                                    minDate={startDate}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.searchRoomWrapper}>
                        <div className={style.searchRoomTitle}>Room and Travelers</div>
                        <div className={style.searchRoomSelectionButton} onClick={roomSelectionStateHandler}>
                            <PersonOutlineIcon/>
                            <div className={style.searchRoomText}>{adultNumber} Adults, {childNumber} Children, 1 Room
                            </div>
                            <KeyboardArrowDownIcon/>
                        </div>
                        {roomSelectionState && <div className={style.roomSelectionDropDownWrapper}>
                            <div className={style.roomSelectionTitle}>Select occupants of each room</div>
                            <div className={style.roomInformation}>
                                <div className={style.roomInformationTitle}>Room 1</div>
                                <div className={style.roomInformationAdults}>
                                    <div className={style.roomInformationAdultsTitle}>Adults</div>
                                    <div className={cn(style.removeButtonWrapper, {disabled: adultNumber === 1})}
                                         onClick={minusAdultNumber}><RemoveIcon/></div>
                                    <div>{adultNumber}</div>
                                    <div className={style.addButtonWrapper} onClick={addAdultNumber}><AddIcon/></div>
                                </div>
                                <div className={style.roomInformationChildren}>
                                    <div className={style.roomInformationChildrenTitle}>Children</div>
                                    <div className={cn(style.removeButtonWrapper, {disabled: childNumber === 0})}
                                         onClick={minusChildNumber}><RemoveIcon/></div>
                                    <div>{childNumber}</div>
                                    <div className={style.addButtonWrapper} onClick={addChildNumber}><AddIcon/></div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className={style.searchButtonWrapper}>
                        <div className={style.searchButton}>Search</div>
                    </div>
                </div>}

                {navBarIsChosen === 'car' && <div className={style.searchCarWrapepr}>
                    car
                </div>}
            </div>
        </div>
    )
};

export default Search;