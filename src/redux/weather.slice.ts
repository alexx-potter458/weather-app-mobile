import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type WeatherProps = {
  weather: any;
};

const initialState: WeatherProps = {
  weather: null,
};

export const weatherSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateWeather: (state, action: PayloadAction<any>) => {
      state.weather = action.payload;
    },
  },
});

export const { updateWeather } = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.weatherReducer.weather;

export default weatherSlice.reducer;
