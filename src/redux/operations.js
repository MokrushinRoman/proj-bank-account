import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentPosition } from 'services/location';

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
