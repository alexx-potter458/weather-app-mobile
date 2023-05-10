import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "./router.types";
import { Home } from "../screens/home/home.screen";
import { Profile } from "../screens/profile/profile.screen";
import { ThemeContext } from "../utils/theme/theme.provider";
import { useContext } from "react";
import { Locations } from "../screens/locations/locations.screen";
import { Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator<Routes>();

export const Main = () => {
  const { theme } = useContext(ThemeContext);

  const iconStyle = StyleSheet.create({
    icon: {
      height: 24,
      width: 24,
      objectFit: "contain",
    },
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        unmountOnBlur: true,
        tabBarIcon: ({ color, size }) => {
          let iconFile: any;

          switch (route.name) {
            case "Home":
              iconFile =
                color === "#ffffff"
                  ? require(`../assets/icons/house.png`)
                  : require(`../assets/icons/house-dark.png`);
              break;
            case "Profile":
              iconFile =
                color === "#ffffff"
                  ? require(`../assets/icons/user.png`)
                  : require(`../assets/icons/user-dark.png`);
              break;
            case "Locations":
              iconFile =
                color === "#ffffff"
                  ? require(`../assets/icons/pin.png`)
                  : require(`../assets/icons/pin-dark.png`);
            default:
              break;
          }
          return <Image style={iconStyle.icon} source={iconFile} />;
        },
        headerShown: false,
        tabBarActiveTintColor: theme.colors.activeIcon,
        tabBarInactiveTintColor: theme.colors.inactiveIcon,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          boxSizing: "border-box",
          paddingTop: -1,
          height: 48,
          marginBottom: 24,
          marginHorizontal: 24,
          borderRadius: 16,
          borderColor: theme.colors.inactiveIcon,
          borderWidth: 1,
          borderTopWidth: 1,
          borderTopColor: theme.colors.inactiveIcon,
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
