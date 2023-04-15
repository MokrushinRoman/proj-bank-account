import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentPosition } from 'services/location';
import { exchangeCurrency } from 'services/conver';

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
