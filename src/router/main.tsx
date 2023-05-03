import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "./router.types";
import { Home } from "../screens/home/home.screen";
import { Profile } from "../screens/profile/profile.screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemeContext } from "../utils/theme/theme.provider";
import { useContext } from "react";
import { Locations } from "../screens/locations/locations.screen";
import { SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator<Routes>();

export const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        initialRouteName: "Dashboard",
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Profile":
              iconName = "person";
              break;
            case "Locations":
              iconName = "location";
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          width: "90%",
          marginVertical: 12,
          marginHorizontal: "5%",
          borderRadius: 22,
          position: "absolute",
          bottom: 8,
        },
      })}
    >
      <Tab.Screen name="Locations" component={Locations} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
