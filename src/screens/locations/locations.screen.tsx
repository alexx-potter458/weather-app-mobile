import { useContext, useEffect, useState } from "react";
import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { TextField } from "../../components/textfield/textfield.component";
import { Button } from "../../components/button/button.component";
import { FlatList, SafeAreaView, Text } from "react-native";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { locationsStyles } from "./locations.style";
import { getWeather } from "../../services/api/weather.api";
import { LocationRow } from "./components/location.row.component";
import {
  getActualLocation,
  removeFavoriteLocation,
  setFavoriteLocation,
} from "../../services/local/local";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "../../router/router.types";
import { auth, db } from "../../utils/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getWeatherImage } from "../../utils/constants.app";

type LocationsProps = NativeStackScreenProps<Routes, "Locations">;
export const Locations = ({ navigation }: LocationsProps) => {
  const { theme } = useContext(ThemeContext);
  const [searchField, setSearchField] = useState("");
  const [searchedLocation, setSearchedLocation] = useState<any>(null);
  const [savedLocations, setSavedLocations] = useState<any[]>([]);
  const styles = locationsStyles(theme);

  const init = async () => {
    const locationsDocs = await getDocs(
      query(
        collection(db, "Locations"),
        where("userId", "==", auth.currentUser?.uid)
      )
    );

    let locations = [] as any[];
    locationsDocs.forEach(async (doc) => {
      const resposnse = await getWeather(doc.data().location);
      resposnse.dbName = doc.data().location;
      resposnse.weather[0].image = getWeatherImage(resposnse.weather[0].main);

      locations.push(resposnse);
      setSavedLocations(locations);
    });
  };

  useEffect(() => {
    init();
  }, []);

  const onSearch = async () => {
    if (searchField !== "")
      try {
        const data = await getWeather(searchField);
        data.weather[0].image = getWeatherImage(data.weather[0].main);
        setSearchedLocation(data);
      } catch (err) {
        console.log(err);
      }
  };

  const onUnsetSearched = async () => {
    setSearchedLocation(null);
  };

  const onUnsetFavourite = async (location: string) => {
    if (location === (await getActualLocation()))
      await removeFavoriteLocation();

    let docId = "";

    const locationsDocs = await getDocs(
      query(collection(db, "Locations"), where("location", "==", location))
    );

    locationsDocs.forEach(async (doc) => {
      docId = doc.id;
    });

    await deleteDoc(doc(db, "Locations", docId));

    init();
  };

  const onSaveSearched = async () => {
    await setFavoriteLocation(searchField);

    let alreadySaved = false;

    savedLocations.forEach((element) => {
      if (element.dbName === searchField) alreadySaved = true;
    });

    if (alreadySaved) {
      navigation.navigate("Home");
      return;
    }

    try {
      await addDoc(collection(db, "Locations"), {
        location: searchField,
        userId: auth.currentUser?.uid,
      });
    } catch (err: any) {
      console.log(err.message);
    }

    navigation.navigate("Home");
  };

  const onSaveFromFavorites = async (dbLocation: string) => {
    await setFavoriteLocation(dbLocation);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Locations</Text>
      <HorizontalSpace size={3} />

      <TextField
        placeholder="Search by city or postal code"
        onChangeText={setSearchField}
      />
      <HorizontalSpace size={2} />
      <Button title="Search" onPress={onSearch} />

      <HorizontalSpace size={3} />
      {searchedLocation !== null ? (
        <LocationRow
          weather={searchedLocation}
          title="save"
          onAction={onSaveSearched}
          onLongAction={onUnsetSearched}
        />
      ) : (
        <>
          <Text style={styles.textNoSearch}>Nothing to search</Text>
        </>
      )}
      <HorizontalSpace size={3} />
      <Text style={styles.title2}>Saved locations</Text>
      <HorizontalSpace size={2} />

      {savedLocations.length > 0 ? (
        <FlatList
          contentInset={{ bottom: 60 }}
          data={savedLocations}
          ListFooterComponent={<HorizontalSpace size={6} />}
          renderItem={({ item }) => (
            <>
              <HorizontalSpace size={2} />
              <LocationRow
                weather={item}
                title="set"
                onAction={onSaveFromFavorites}
                onLongAction={onUnsetFavourite}
              />
            </>
          )}
        />
      ) : (
        <>
          <Text style={styles.textNoSearch}>Nothing saved</Text>
        </>
      )}
    </SafeAreaView>
  );
};
