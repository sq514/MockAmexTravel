import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputText: "",
  startDate: new Date(),
  endDate: new Date()
};

const carSearchSlice = createSlice(
  {
    name: "carSearch",
    initialState,
    reducers: {
      setInputText: (state, inputText) => {
        state.inputText = inputText.payload;
      },
      setStartDate: (state, startDate) => {
        state.startDate = startDate.payload;
      },
      setEndDate: (state, endDate) => {
        state.endDate = endDate.payload;
      }
    }
  }
);
export const { setInputText, setStartDate, setEndDate } = carSearchSlice.actions;
export default carSearchSlice.reducer;