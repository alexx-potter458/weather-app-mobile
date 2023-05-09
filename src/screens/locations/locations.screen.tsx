import { useContext, useEffect, useState } from "react";
import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { TextField } from "../../components/textfield/textfield.component";
import { Button } from "../../components/button/button.component";
import { FlatList, SafeAreaView, Text } from "react-native";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { locationsStyles } from "./locations.style";
import { getWeather } from "../../services/api/weather.api";
import { LocationRow } from "./components/location.row.component";
import { setFavoriteLocation } from "../../services/local/local";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "../../router/router.types";
import { auth, db } from "../../utils/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

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
        setSearchedLocation(data);
      } catch (err) {
        console.log(err);
      }
  };

  const onSaveSearched = async () => {
    await setFavoriteLocation(searchField);
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
          type={searchedLocation.weather[0].main}
          temp={searchedLocation.main.temp}
          location={searchedLocation.name}
          title="Save & set"
          onAction={onSaveSearched}
        />
      ) : (
        <>
          <Text style={styles.textNoSearch}>Nothing to search</Text>
        </>
      )}
      <HorizontalSpace size={3} />
      <Text style={styles.title}>Saved locations</Text>
      <HorizontalSpace size={2} />

      {savedLocations.length > 0 ? (
        <FlatList
          data={savedLocations}
          renderItem={({ item }) => (
            <>
              <HorizontalSpace size={2} />
              <LocationRow
                type={item.weather[0].main}
                temp={item.main.temp}
                location={item.name}
                dbLocation={item.dbName}
                title="Set"
                onAction={onSaveFromFavorites}
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
