import { createSlice } from '@reduxjs/toolkit';
import { getCurrency, convert } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '', changeResult: 0, isLoading: false },
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
      }),
});

export const currencyReducer = currencySlice.reducer;
export const { addBaseCurrency } = currencySlice.actions;
