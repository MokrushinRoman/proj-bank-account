import { createSlice } from '@reduxjs/toolkit';
import { getCurrency, convert, rates } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '', changeResult: 0, isLoading: false, rates: [] },
  reducers: {
    addBaseCurrency(state, { payload }) {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCurrency.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      })
      .addCase(convert.pending, state => {
        state.isLoading = true;
      })
      .addCase(convert.fulfilled, (state, { payload }) => {
        state.changeResult = payload;
        state.isLoading = false;
      }).addCase(rates.fulfilled, (state, { payload }) => {
        state.rates = payload;
      }),
});

export const currencyReducer = currencySlice.reducer;
export const { addBaseCurrency } = currencySlice.actions;
