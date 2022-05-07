import React, {useState} from 'react';
import style from "./CarSearch.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DatePicker from "react-datepicker";
import Select from 'react-select'
import {Checkbox} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
import { setEndDate, setInputText, setStartDate } from "../../ducks/carSearch/carSearchSlice";

const DRIVER_AGE_WRAPPER_HEIGHT = '130px';
const pickupDateStyles = {
    control: (_, state) => {
        return {
            height: "40px",
            border: "1px solid #b7b7b7",
            "border-radius": "5px",
            "background-color": "#f6f6f6",
            display: "flex",
            "align-items": "center",
            width: "550",
            "box-shadow": state.isFocused ? "0 0 8px #5ca2e1" : "none",
            "outline": state.isFocused ? "1px solid blue" : "none"
        }
    },
    menu: (provided) => ({
        ...provided,
        "font-size": "14px",
        "padding": "0",
    })
}

const carTypeStyles = {
    control: (_, state) => {
        return {
            "height": "40px",
            "border": "1px solid #b7b7b7",
            "border-radius": "5px",
            "background-color": "#f6f6f6",
            "display": "flex",
            "align-items": "center",
            "box-shadow": state.isFocused ? "0 0 8px #5ca2e1" : "none",
            "outline": state.isFocused ? "1px solid blue" : "none"
        }
    },
    menu: (provided) => ({
        ...provided,
        "font-size": "14px",
        "padding": "0"
    })
}

const CarSearch = () => {

    const carTypeOptions = [
        {value: 'compact', label: 'Compact'},
        {value: 'convertible', label: 'Convertible'},
        {value: 'fullSize', label: 'Full size'},
        {value: 'jeep', label: 'Jeep'},
        {value: 'luxury', label: 'Luxury'},
    ]
    const timeOptions = [
        {value: '0', label: '0:00'},
        {value: '2', label: '2:00'},
        {value: '4', label: '4:00'},
        {value: '6', label: '6:00'},
        {value: '8', label: '8:00'},
        {value: '10', label: '10:00'},
        {value: '12', label: '12:00'},
        {value: '14', label: '14:00'},
        {value: '16', label: '16:00'},
        {value: '18', label: '18:00'},
    ]


    const [boxHeight, setBoxHeight] = useState(DRIVER_AGE_WRAPPER_HEIGHT)
    const checkBoxHandler = () => {
        if (boxHeight === DRIVER_AGE_WRAPPER_HEIGHT) setBoxHeight(0)
        else setBoxHeight(DRIVER_AGE_WRAPPER_HEIGHT)
    }


    const dispatch = useDispatch()
    const {inputText,startDate,endDate} = useSelector(
      (state) => state.carSearch
    )
    const inputHandler = (e) => {
        dispatch(setInputText(e.target.value))
    }
    return (
        <div className={style.searchCarWrapper}>
            <div className={style.searchDestination}>
                <div className={style.searchDestinationTitle}>Pick Up</div>
                <div className={style.searchDestinationInputWrapper}>
                    <SearchIcon/>
                    <input placeholder={'City or airport code'} onChange={inputHandler} value={inputText}></input>
                </div>
            </div>

            <div className={style.carPickupDate}>
                <div className={style.searchDatesWrapper}>
                    <div className={style.searchDatesTitle}>Pick Up</div>
                    <div className={style.calendarWrapper}>
                        <DateRangeIcon/>
                        <DatePicker
                            minDate={new Date()}
                            selected={startDate}
                            onChange={(date) => dispatch(setStartDate(date))}/>
                    </div>
                </div>
                <div className={style.searchDatesWrapper}>
                    <div className={style.searchDatesTitle}>Pick Up Time</div>
                    <Select options={timeOptions} width="500px" styles={pickupDateStyles}/>
                </div>
                <div className={style.searchDatesWrapper}>
                    <div className={style.searchDatesTitle}>Drop Off</div>
                    <div className={style.calendarWrapper}>
                        <DateRangeIcon/>
                        <DatePicker
                            minDate={startDate}
                            selected={endDate}
                            onChange={(date) => dispatch(setEndDate(date))}/>
                    </div>
                </div>
                <div className={style.searchDatesWrapper}>
                    <div className={style.searchDatesTitle}>Drop Off Time</div>
                    <Select options={timeOptions} styles={pickupDateStyles}/>
                </div>
            </div>
            <div className={style.searchDestination}>
                <div className={style.searchDestinationTitle}>Car Type</div>
                <div className={style.carTypeWrapper}>

                    <Select options={carTypeOptions} styles={carTypeStyles}/>
                </div>
            </div>
            <div className={style.driverAgeCheckBox}>
                <Checkbox size="small" onChange={checkBoxHandler}/>
                <div>Driver&apos; age is between 30 to 65 years old</div>
            </div>
            <div className={style.searchDestination} style={{height: boxHeight, overflow:!boxHeight?'hidden':'none'}}>
                <div className={style.searchDestinationTitle}>Driver Age</div>
                <div className={style.searchDestinationInputWrapper}>
                    <input placeholder={'Age'} type="number"></input>
                </div>
            </div>

            <div className={style.searchButtonWrapper}>
                <div className={style.searchButton}>Search</div>
            </div>
        </div>

    )
};
export default CarSearch;