import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUserEmail = async (value = "") => {
  await AsyncStorage.setItem("email", value);
};

export const getUserEmail = async () => {
  return (await AsyncStorage.getItem("email")) ?? "";
};

export const isLogged = async () => {
  return (await getUserEmail()) !== "";
};

export const getTheme = async () => {
  return (await AsyncStorage.getItem("theme")) ?? "dark";
};

export const setTheme = async (value: string) => {
  await AsyncStorage.setItem("theme", value);
};

export const getFavoriteLocation = async () => {
  return (await AsyncStorage.getItem("location")) ?? "Bucharest";
};

export const getActualLocation = async () => {
  return (await AsyncStorage.getItem("location")) ?? "";
};

export const setFavoriteLocation = async (value: string) => {
  return await AsyncStorage.setItem("location", value);
};
