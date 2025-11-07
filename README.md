## License

© 2025 Kairo. All rights reserved.  

This React Native mobile application and its source code are proprietary to Kairo.  
This repository is public for viewing and reference purposes only.  
No part of this project — including code, components, assets, or UI designs — may be
copied, modified, or distributed without explicit written permission from Kairo.


import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function EmailScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoIcon}>📍</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Get started with your email</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter email address"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Continue Button */}
      
      <TouchableOpacity
        style={styles.continueButton}
        // onPress={() => navigation.navigate("VerifyEmail")}
        >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Social Buttons */}
      <Link asChild href="/(singUp)/VerifyEmail">
      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-apple" size={20} color="#000" style={styles.icon} />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>
      </Link>

      <Link asChild href="/(auth)">
      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-google" size={20}  style={styles.icon} />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>
      </Link>

      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-facebook" size={20} color="#4267B2" style={styles.icon} />
        <Text style={styles.socialText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
  },
  backButton: {
    marginBottom: 30,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 62,
  },
  logoIcon: {
    fontSize: 60,
    color: "#00C16A",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
    marginBottom: 24,
  },
  continueButton: {
    backgroundColor: "#007F5F",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E5E5",
  },
  orText: {
    marginHorizontal: 12,
    color: "#777",
    fontWeight: "500",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#007F5F",
    borderRadius: 30,
    paddingVertical: 14,
    marginBottom: 14,
  },
  icon: {
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
});
