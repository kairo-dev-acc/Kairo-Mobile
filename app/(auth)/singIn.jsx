// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleIcon from "../../assets/images/google.svg";
import Kairologo from "../../assets/images/Kairo-Logo.svg";
import Button from "../../components/button.jsx";
import Input from "../../components/InPut.jsx";
// import {COLOR} from "../../constants/color.js"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (text) => {
    setError("");
    setEmail(text);
  };

  const handleContinue = () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    console.log("Continue with email:", email);
  };

    const handleAppleSignup = () => {
    console.log("Continue with email:", email);
  };
  const handleGoogleSignup = () => {
    console.log("Continue with email:", email);
  };
  const handleFacebookSignup = () => {
    console.log("Continue with email:", email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.inner}>
          <Link asChild href="/(auth)">
            <TouchableOpacity style={styles.backIcon}>
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          </Link>

          {/* Logo */}

          <View style={styles.logoContainer}>
            <Kairologo width={99} height={138} />
          </View>

          {/* Email input section */}
          <View style={styles.emailSection}>
            <Text style={styles.title}>Sign in with your email</Text>
            <View style={{ marginBottom: 24 }}>
              <Input
                value={email}
                onChange={handleChange}
                placeholder="Enter email address"
                error={error}
              />
            </View>
            <Button
              textName="Continue"
              TextColor="#fff"
              backgroundColor="#156F70"
              onPressfunction={handleContinue}
            />

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>
          </View>

          {/* Social buttons */}
          <View style={styles.socialContainer}>
            <Button
              textName="Continue with Apple"
              TextColor="#156F70"
              backgroundColor="#CFF8F3"
              onPressfunction={handleAppleSignup}
              icon={<AntDesign name="apple" size={15} color="black" />}
            />

            <Button
              textName="Continue with Google"
              TextColor="#156F70"
              backgroundColor="#CFF8F3"
              onPressfunction={handleGoogleSignup}
              iconSvg={<GoogleIcon width={14} height={15} />}
            />

            <Button
              textName=" Continue with Facebook"
              TextColor="#156F70"
              backgroundColor="#CFF8F3"
              onPressfunction={handleFacebookSignup}
              icon={<FontAwesome5 name="facebook" size={15} color="#1877F2" />}
            />
          </View>
          <View>
            <Text style={styles.help}>Need help?</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
  },
  backIcon: {
    marginHorizontal: 23,
    paddingTop: 30,
    paddingBottom: 39,
  },
  logoContainer: {
    alignItems: "center",
  },
  emailSection: {
    marginTop: 76,
  },
  title: {
    fontSize: 20.74,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 27,
    marginHorizontal: 27,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: 12,
    color: "#888",
    fontSize: 14,
  },
  socialContainer: {
    marginBottom: 28,
    gap: 20,
  },
  help:{
    textAlign: "center",
    marginBottom: 8,
    color: "#156F70"
  },
});
