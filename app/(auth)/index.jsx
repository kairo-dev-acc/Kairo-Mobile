// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../../constants/Color.js"

const { width, height } = Dimensions.get("window");

const images = [
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
];

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();
  const PHOTO_HEIGHT = Math.round(height * 0.88);

  return (
    <View style={styles.container}>
      {/* IMAGE SLIDER */}
      <View style={{ flex: 0.7 }}>
        <SwiperFlatList
          autoplay
          autoplayDelay={4}
          autoplayLoop
          showPagination
          paginationDefaultColor="rgba(255,255,255,0.4)"
          paginationActiveColor={COLORS.emerald[500]}
        >
          {images.map((img, index) => (
            <ImageBackground
              key={index}
              source={img}
              style={[styles.imageBackground, { height: PHOTO_HEIGHT }]}
              resizeMode="cover"
            >
              {/* Gradient Overlay */}
              <LinearGradient
                colors={["rgba(0,0,0,0.25)", "rgba(0,0,0,0.45)"]}
                style={StyleSheet.absoluteFill}
              />
            </ImageBackground>
          ))}
        </SwiperFlatList>
      </View>

      {/* OVERLAY HEADLINE */}
      <View style={styles.headlineWrap} pointerEvents="none">
        <Text style={[styles.pin, { color: COLORS.emerald[500] }]}>📍</Text>
        <Text style={styles.headlineTop}>Get it</Text>
        <Text style={[styles.headlineBottom, { color: COLORS.emerald[500] }]}>
          Done!
        </Text>
      </View>

      {/* WHITE BOTTOM CARD */}
      <View
        style={[
          styles.bottomCard,
          { paddingBottom: insets.bottom + (Platform.OS === "ios" ? 20 : 16) },
        ]}
      >
        <View style={styles.buttonWrapper}>
          {/* Sign Up */}
          <Link href="/(auth)/signUp" asChild>
            <TouchableOpacity style={styles.signUpButton} activeOpacity={0.9}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </Link>

          {/* Sign In */}
          <Link href="/(auth)/signIn" asChild>
            <TouchableOpacity style={styles.signInButton} activeOpacity={0.9}>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text style={styles.privacyText}>
          By continuing, you agree to Kairo’s{" "}
          <Text style={styles.linkText}>Privacy Policy</Text> and{" "}
          <Text style={styles.linkText}>Terms of Use</Text>.
        </Text>
      </View>
    </View>
  );
}

const CARD_RADIUS = 28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.shark[950],
  },

  imageBackground: {
    width,
    justifyContent: "flex-end",
  },

  headlineWrap: {
    position: "absolute",
    top: Math.round(height * 0.28) - 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  pin: {
    fontSize: 64,
    marginBottom: 6,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headlineTop: {
    fontSize: 64,
    color: COLORS.primary.white,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 50,
  },
  headlineBottom: {
    fontSize: 64,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 56,
  },

  bottomCard: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.primary.white,
    borderTopLeftRadius: CARD_RADIUS,
    borderTopRightRadius: CARD_RADIUS,
    paddingHorizontal: 24,
    paddingTop: 20,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shark[900],
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  buttonWrapper: {
    width: "100%",
    alignItems: "center",
  },

  signUpButton: {
    backgroundColor: COLORS.emerald[600],
    width: "90%",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 14,
  },
  signUpText: {
    color: COLORS.primary.white,
    fontSize: 18,
    fontWeight: "700",
  },

  signInButton: {
    width: "90%",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: COLORS.emerald[600],
    backgroundColor: "transparent",
  },
  signInText: {
    color: COLORS.emerald[600],
    fontSize: 17,
    fontWeight: "700",
  },

  privacyText: {
    color: COLORS.shark[400],
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },
  linkText: {
    color: COLORS.shark[950],
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
