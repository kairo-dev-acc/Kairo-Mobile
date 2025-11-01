// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../assets/style/authStyle";

export default function auth() {
  return (
    <ImageBackground source={require("../../assets/images/KairoAuthScreen.jpg")} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={styles.headerBox} >
          <Text style={styles.header} >Get it</Text>
          <Text style={styles.header}  >Done!</Text>
        </View>
        <View style={styles.authBox} >
          <View>
          <TouchableOpacity style={styles.button}> <Link href=""> <Text>Sing Up</Text> </Link>  </TouchableOpacity>
          <TouchableOpacity style={styles.button}> <Link href='/'> <Text>Sing Up</Text> </Link> </TouchableOpacity>
          </View>
          <View>
            <Text>By continuing, you agree to Kairo’s</Text>
          <View>
            <Link href="/">Privacy Policy</Link>
            <Text>and</Text>
            <Link href="/">Terms of Service</Link>
          </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
