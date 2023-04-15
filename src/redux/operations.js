import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentPosition } from 'services/location';
import { exchangeCurrency, latest } from 'services/conver';

export const getCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (crd, thunkAPI) => {
    try {
      const { results } = await getCurrentPosition(crd);
      return results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const convert = createAsyncThunk(
  'currency/convert',
  async (convertValue, thunkAPI) => {
    try {
      const data = await exchangeCurrency(convertValue);
      console.log(data);
      return data.result;
    } catch (error) {}
  }
);

export const rates = createAsyncThunk(
  'currency/rates',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const base = state.currency.baseCurrency;
    try {
      const data = await latest(base);
      return data.rates;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error)
    }
})
