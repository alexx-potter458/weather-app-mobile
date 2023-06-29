import "dotenv/config";

export default {
  expo: {
    name: "weather-app-mobile",
    slug: "weather-app-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.pottertech.weather_app_mobile",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: "AIzaSyBKTW4sdYg96RWdnRgCBwOuEq3_HwBxcOQ",
      authDomain:
        "249840890762-okr760g1lv23uvr1qhl4htsds4ii5rqh.apps.googleusercontent.com",
      productId: "potter-weather-app-mobile",
      storageBucket: "potter-weather-app-mobile.appspot.com",
      messagingSenderId: "249840890762",
      appId: "1:249840890762:android:a2e79eb8e0f2f409658e73",
      weatherApi: "ea69b6747afd51e1c513c0b4ed8206c4",
      eas: {
        projectId: "f4a7849b-a018-431b-8f44-70a4fb3d210d",
      },
    },
    plugins: [],
  },
};
