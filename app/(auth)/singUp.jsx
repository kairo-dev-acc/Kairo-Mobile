// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Kairologo from "../../assets/images/Kairo-Logo.svg";
import Button from "../../components/button.jsx";
import Input from "../../components/InPut.jsx";

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Kairologo width={151} height={163} />
        </View>

        {/* Email input section */}
        <View style={styles.emailSection}>
          <Text style={styles.title}>Get started with your email</Text>
          <View style={{marginBottom: 24}}>

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
            backgroundColor="#0f8c0dff"
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
            TextColor="#fff"
            backgroundColor="#545454ff"
            onPressfunction={handleContinue}
          />

          
            <Button
            textName=" Continue with Google"
            TextColor="#fff"
            backgroundColor="#545454ff"
            onPressfunction={handleContinue}
          />

            <Button
            textName=" Continue with Facebook"
            TextColor="#fff"
            backgroundColor="#545454ff"
            onPressfunction={handleContinue}
          />
          
        </View>
      </View>
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
  logoContainer: {
    alignItems: "center",
    marginTop: 62,
  },
  emailSection: {
    marginTop: 40,
  },
  title: {
    fontSize: 20.74,
    fontWeight: 600,
    marginBottom: 16,
    textAlign:"center",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 27,
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
    marginBottom: 70,
    gap: 20,
  },
});
