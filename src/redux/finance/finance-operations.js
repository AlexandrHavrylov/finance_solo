import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFinance = createAsyncThunk(
  'finance/get-finance',
  async credentials => {
    try {
      const { data } = await axios.get('/finance', credentials);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
