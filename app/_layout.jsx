// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------


import { Stack } from "expo-router";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";


export default function RootLayout() {

  

let [fontsLoaded] = useFonts({

  // Font being user
  "Poppins-ExtraBold": require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
  "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  "Poppins-Light": require("../assets/fonts/Poppins/Poppins-Light.ttf"),

// other if needed
  "Poppins-Black": require("../assets/fonts/Poppins/Poppins-Black.ttf"),
  "Poppins-BlackItalic": require("../assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
  "Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
  "Poppins-ExtraBoldItalic": require("../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
  "Poppins-ExtraLight": require("../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
  "Poppins-Italic": require("../assets/fonts/Poppins/Poppins-Italic.ttf"),
  "Poppins-LightItalic": require("../assets/fonts/Poppins/Poppins-LightItalic.ttf"),
  "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
  "Poppins-MediumItalic": require("../assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
  "Poppins-SemiBoldItalic": require("../assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
  "Poppins-Thin": require("../assets/fonts/Poppins/Poppins-Thin.ttf"),
  "Poppins-ThinItalic": require("../assets/fonts/Poppins/Poppins-ThinItalic.ttf"),
});
if (!fontsLoaded) {
  return <AppLoading />;
}

  return (
    <Stack screenOptions={{headerShown:false}}>

    </Stack>
  
);
}
