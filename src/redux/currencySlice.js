import { createSlice } from '@reduxjs/toolkit';
import { getCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '' },
  reducers: {
    addBaseCurrency(state, { payload }) {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(getCurrency.fulfilled, (state, { payload }) => {
      state.baseCurrency = payload;
    }),
});

export const currencyReducer = currencySlice.reducer;
export const { addBaseCurrency } = currencySlice.actions;
