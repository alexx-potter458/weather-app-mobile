import axios from "axios";
import Constants from "expo-constants";
import { weatherBaseUrl, weatherUnits } from "../../utils/constants.app";

export const getWeather = async (searchValue: string) => {
  try {
    const response = await axios.get(
      `${weatherBaseUrl}/weather?appid=${Constants.manifest?.extra?.weatherApi}&units=${weatherUnits}&q=${searchValue}`
    );
    return response.data;
  } catch (e) {
    return null;
  }
};
