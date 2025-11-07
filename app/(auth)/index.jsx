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
// import COLOR from "../../constants/color.JS"

const { width, height } = Dimensions.get("window");

// your assets (you already used require). keep them as-is
const images = [
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
];

export default function WelcomeScreen({ navigation }) {
  // we'll make the photo area occupy ~72% of the screen height like your screenshot
  const PHOTO_HEIGHT = Math.round(height * 0.88);

  return (
    <View style={styles.container}>
      {/* BACKGROUND IMAGE SLIDER (only images move) */}
      <View style={{ flex: 0.7 }}>
        <SwiperFlatList
          autoplay
          autoplayDelay={4}
          autoplayLoop
          showPagination
          paginationDefaultColor="rgba(255,255,255,0.4)"
          paginationActiveColor="#00C16A"
        >
          {images.map((img, index) => (
            <ImageBackground
              key={index}
              source={img}
              style={[styles.imageBackground, { height: PHOTO_HEIGHT }]}
              resizeMode="cover"
            >
              {/* subtle dark gradient overlay */}
              <View style={styles.imageDarkOverlay} />
            </ImageBackground>
          ))}
        </SwiperFlatList>
      </View>

      {/* STATIONARY CONTENT: headline that overlaps photo & white card */}
      <View style={styles.headlineWrap} pointerEvents="none">
        <Text style={styles.pin}>📍</Text>
        <Text style={styles.headlineTop}>Get it</Text>
        <Text style={styles.headlineBottom}>Done!</Text>
      </View>

      {/* WHITE BOTTOM CARD (fixed) */}
      <View style={styles.bottomCard}>
        <View style={styles.buttonWrapper}>
          <Link asChild href="(auth)/singUp">
          <TouchableOpacity
            style={styles.signUpButton}
            activeOpacity={0.9}
            onPress={() => navigation?.navigate?.("SignUp")}
          >
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
          </Link>

          <Link asChild href="(auth)/singIn">
          <TouchableOpacity
            style={styles.signInButton}
            activeOpacity={0.9}
            onPress={() => navigation?.navigate?.("SignIn")}
          >
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>
          </Link>
        </View>

        <Text style={styles.privacyText}>
          By continuing, you agree to Kairo’s{" "}
          <Text style={styles.linkText}>Privacy Policy</Text> and{" "}
          <Text style={styles.linkText}>Term of Us</Text>.
        </Text>

        {/* small home indicator (visual only) */}
        {/* <View style={styles.indicatorContainer}>
          <View style={styles.indicator} />
        </View> */}
      </View>
    </View>
  );
}

const CARD_RADIUS = 28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  /* image */
  imageBackground: {
    width,
    justifyContent: "flex-end",
  },
  imageDarkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.28)",
  },

  /* headline sitting over the image and overlapping the card */
  headlineWrap: {
    position: "absolute",
    top: Math.round(height * 0.28) - 20, // positions headline roughly mid-image to match screenshot
    left: 0,
    right: 0,
    alignItems: "center",
  },
  pin: {
    fontSize: 64,
    color: "#00C16A",
    marginBottom: 6,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headlineTop: {
    fontSize: 64,
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 50,
  },
  headlineBottom: {
    fontSize: 64,
    color: "#00C16A",
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 56,
  },

  /* bottom white card */
  bottomCard: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: CARD_RADIUS,
    borderTopRightRadius: CARD_RADIUS,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: Platform.OS === "ios" ? 34 : 20,
    // Elevation / shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
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
    backgroundColor: "#0F8A5E", // slightly brighter green
    width: "90%",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 14,
    // subtle inner shadow look via elevation on android
  },
  signUpText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  signInButton: {
    width: "90%",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#0F8A5E",
    backgroundColor: "transparent",
  },
  signInText: {
    color: "#0F8A5E",
    fontSize: 17,
    fontWeight: "700",
  },

  privacyText: {
    color: "#6b6b6b",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },
  linkText: {
    color: "#000",
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  indicatorContainer: {
    marginTop: 12,
    alignItems: "center",
  },
  indicator: {
    width: 120,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#111",
    opacity: 0.08,
  },
});
