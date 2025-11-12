import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import {
  StatusBar,
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Kairologo from "../../assets/images/Kairo-Logo.svg";
import styles from "../../assets/style/auth/index";
import COLORS from "../../constants/Color.js";

const { height } = Dimensions.get("window");

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
      <StatusBar animated />
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
              <LinearGradient
                colors={["rgba(0,0,0,0.25)", "rgba(0,0,0,0.45)"]}
                style={{ ...StyleSheet.absoluteFillObject }}
              />
            </ImageBackground>
          ))}
        </SwiperFlatList>
      </View>

      {/* OVERLAY HEADLINE */}
      <View style={styles.headlineWrap} pointerEvents="none">
        <Kairologo width={99} height={138} />
        <Text style={styles.headlineTop}>Get it</Text>
        <Text style={styles.headlineBottom}>Done!</Text>
      </View>

      {/* WHITE BOTTOM CARD */}
      <View
        style={[
          styles.bottomCard,
          { paddingBottom: insets.bottom + (Platform.OS === "ios" ? 20 : 16) },
        ]}
      >
        <View style={styles.buttonWrapper}>
          <Link href="/(auth)/signup" asChild>
            <TouchableOpacity style={styles.signUpButton} activeOpacity={0.9}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(auth)/signin" asChild>
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
