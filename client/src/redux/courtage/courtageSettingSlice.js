import { createSlice } from '@reduxjs/toolkit';

export const courtageSettingSlice = createSlice({
  name: 'courtageSettings',
  initialState: {
    minCourtage: 1,
    percentageCourtage: 0.0025,
    currencyCourtage: 0.0025,
    baseCurrency: 'SEK',
    currencyExchange: 8.86,
  },
  reducers: {
    setMinCourtage: (state, action) => {
      state.minCourtage = action.payload;
    },
    setPercentageCourtage: (state, action) => {
      state.percentageCourtage = action.payload;
    },
    setCurrencyCourtage: (state, action) => {
      state.currencyCourtage = action.payload;
    },
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
    setCurrencyExchange: (state, action) => {
      console.warn(action);
      state.currencyExchange = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setMinCourtage,
  setPercentageCourtage,
  setCurrencyCourtage,
  setBaseCurrency,
  setCurrencyExchange,
} = courtageSettingSlice.actions;

export default courtageSettingSlice.reducer;
