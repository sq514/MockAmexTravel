import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    inputText: '',
    startDate: new Date()
}

const carSearchSlice = createSlice(
    {
        name: 'carSearch',
        initialState,
        reducers: {
            setInputText: (state, inputText) => {
                state.inputText = inputText.payload;
            },
            setStartDate: (state, startDate) => {
                state.startDate = startDate.payload
            }
        }
    }
);
export const {setInputText, setStartDate} = carSearchSlice.actions;
export default carSearchSlice.reducer;