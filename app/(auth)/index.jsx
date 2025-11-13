import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Kairologo from "../../assets/images/Kairo-Logo.svg";
import styles from "../../assets/style/auth/index"; // 👈 imported here
import COLORS from "../../constants/Color.js";

const images = [
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
];

export default function WelcomeScreen() {
  const { height, width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const PHOTO_HEIGHT = height * (height > 700 ? 0.89 : 0.8);
  const CARD_RADIUS = 28;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
        animated
      />

      {/* IMAGE SLIDER */}
      <View style={{ height: PHOTO_HEIGHT }}>
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
              style={styles.imageBackground}
              resizeMode="cover"
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.15)", "rgba(0,0,0,0.55)"]}
                style={styles.gradientOverlay}
              />
            </ImageBackground>
          ))}
        </SwiperFlatList>
      </View>

      {/* HEADLINE OVERLAY */}
      <View style={[styles.headlineWrap, { top: PHOTO_HEIGHT * 0.58 }]}>
        <Kairologo width={90} height={120} />
        <Text style={[styles.headlineTop, { fontSize: width * 0.11 }]}>
          Get it
        </Text>
        <Text style={[styles.headlineBottom, { fontSize: width * 0.12 }]}>
          Done!
        </Text>
      </View>

      {/* WHITE BOTTOM CARD */}
      <View
        style={[
          styles.bottomCard,
          {
            borderTopLeftRadius: CARD_RADIUS,
            borderTopRightRadius: CARD_RADIUS,
            paddingBottom: insets.bottom + (Platform.OS === "ios" ? 22 : 16),
          },
        ]}
      >
        <View style={styles.buttonWrapper}>
          <Link href="/(auth)/signup" asChild push>
            <TouchableOpacity style={styles.signUpButton} activeOpacity={0.5}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(auth)/signin" asChild push>
            <TouchableOpacity style={styles.signInButton} activeOpacity={0.5}>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.bottomPrivecy}>
          <Text style={styles.privacyText}>
            By continuing, you agree to Kairo’s{" "}
          </Text>
          <View style={styles.bottomTerms}>
            <View>
              <Text style={styles.linkText}>Privacy Policy</Text>
              <View style={styles.termsBox}></View>
            </View>
            <Text style={styles.privacyText_}>{" "}and{" "}</Text>
            <View >
              <Text style={styles.linkText}>Terms of Use</Text>.
              <View style={styles.termsBox}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
