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
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleIcon from "../../assets/images/google.svg";
import Kairologo from "../../assets/images/Kairo-Logo.svg";
import Button from "../../components/button.jsx";
import Input from "../../components/InPut.jsx";
import styles from "../../assets/style/auth/singUp.js";
import COLORS from "../../constants/Color.js"; 

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

  const handleAppleSignup = () => console.log("Continue with Apple");
  const handleGoogleSignup = () => console.log("Continue with Google");
  const handleFacebookSignup = () => console.log("Continue with Facebook");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          {/* Back button */}
          <Link asChild href="/(auth)">
            <TouchableOpacity style={styles.backIcon}>
              <Feather name="arrow-left" size={24} color={COLORS.shark[900]} />
            </TouchableOpacity>
          </Link>

          {/* Logo */}
          <View style={styles.logoContainer}>
            <Link asChild href="/(auth)/verifysingup">
              <Kairologo width={99} height={138} />
            </Link>
          </View>

          {/* Email section */}
          <View style={styles.emailSection}>
            <Text style={styles.title}>Get started with your email</Text>

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
              TextColor={COLORS.primary.white}
              backgroundColor={COLORS.Tiber[700]}
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
              TextColor={COLORS.Tiber[700]}
              backgroundColor={COLORS.Tiber[100]}
              onPressfunction={handleAppleSignup}
              icon={<AntDesign name="apple" size={15} color="black" />}
            />

            <Button
              textName="Continue with Google"
              TextColor={COLORS.Tiber[700]}
              backgroundColor={COLORS.Tiber[100]}
              onPressfunction={handleGoogleSignup}
              iconSvg={<GoogleIcon width={14} height={15} />}
            />

            <Button
              textName="Continue with Facebook"
              TextColor={COLORS.Tiber[700]}
              backgroundColor={COLORS.Tiber[100]}
              onPressfunction={handleFacebookSignup}
              icon={<FontAwesome5 name="facebook" size={15} color="#1877F2" />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
