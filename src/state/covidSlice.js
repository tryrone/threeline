import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCovidData } from '../services/Covid';

const initialState = {
  covidDataLoading: false,
  covidDataError: null,
  data: {},
};

export const allCovidData = createAsyncThunk('covid/allCovidData', async () => {
  const response = await getAllCovidData();
  return response.data.data;
});

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  extraReducers: {
    [allCovidData.pending]: (state) => {
      state.covidDataLoading = true;
      state.covidDataError = null;
    },
    [allCovidData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.covidDataLoading = false;
      state.covidDataError = null;
    },
    [allCovidData.rejected]: (state, action) => {
      state.data = initialState.data;
      state.covidDataLoading = false;
      state.covidDataError = action.error.message || action.error;
    },
  },
});

export default covidSlice.reducer;
