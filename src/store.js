import carSearchReducer from './ducks/carSearch/carSearchSlice'
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        carSearch: carSearchReducer
    }
})