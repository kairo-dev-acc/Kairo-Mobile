// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import Feather from "@expo/vector-icons/Feather";
import { Link, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FaceId from "../../assets/images/ios-Face-ID.svg";
import Button from "../../components/button.jsx";

// ------------------------------------------------------------
// Step 1: Email Verification Screen
// ------------------------------------------------------------
const EmailVerificationStep = ({ onContinue }) => {
  return (
    <>
      <Link asChild href="/(auth)/signin" dismissTo>
        <TouchableOpacity style={styles.backIcon} accessible accessibilityLabel="Go back to signup">
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </Link>

      <View style={styles.view}>
        <Text style={styles.title}>Verify your Email</Text>
        <Text style={styles.subtitle}>
          A code was sent to your email. Please enter the code below to continue.
        </Text>

        {/* Placeholder for code input */}
        <View style={styles.codeContainer}>
          {["-", "-", "-", "-", "-", "-"].map((num, i) => (
            <View key={i} style={styles.codeBox}>
              <Text>{num}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.subtitletwo}>Didn’t receive the code?</Text>
        <Text style={styles.subtitletwo}>
          Go back, check your email and try again.
        </Text>
      </View>

      <View style={styles.buttonBox}>
        <Button
          textName="Continue"
          TextColor="#fff"
          backgroundColor="#156F70"
          onPressfunction={onContinue}
        />
      </View>
    </>
  );
};

// ------------------------------------------------------------
// Step 2: Face ID Setup Screen
// ------------------------------------------------------------
const FaceIDSetupStep = ({ onFinish }) => {
  const Router = useRouter();

  const handleProceed = () => Router.push("/(tabs)");

  return (
    <View style={styles.view}>
      <View style={styles.faceIDContainer}>
        <View style={styles.FaceId}>
          <FaceId />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Secure your details</Text>
          <Text style={styles.subtitle}>Turn on Face ID to secure your Kairo app.</Text>
        </View>

        <View style={styles.faceIDButtonGroup}>
          <Button
            textName="Enable Face ID"
            TextColor="#fff"
            backgroundColor="#156F70"
            onPressfunction={handleProceed}
          />
          <Button
            textName="Skip, I’ll do that later"
            TextColor="#156F70"
            backgroundColor="#CFF8F3"
            onPressfunction={handleProceed}
          />
        </View>
      </View>
    </View>
  );
};

// ------------------------------------------------------------
// Main Registration Flow Container
// ------------------------------------------------------------
const RegistrationFlow = () => {
  const [step, setStep] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;

  const screens = [EmailVerificationStep, FaceIDSetupStep];
  const StepComponent = screens[step];

  // Animate progress bar
  useEffect(() => {
    Animated.timing(progress, {
      toValue: (step + 1) / screens.length,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [step]);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const nextStep = () => {
    if (step < screens.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <StepComponent onContinue={nextStep} onFinish={nextStep} goBack={prevStep} />
      </View>
    </SafeAreaView>
  );
};

// ------------------------------------------------------------
// Styles
// ------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  progressContainer: {
    height: 4,
    width: "100%",
    backgroundColor: "#c3c2c2ff",
    overflow: "hidden",
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#00796b",
    borderRadius: 2,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  view: {
    flex: 2,
    paddingHorizontal: 28,
  },
  backIcon: {
    marginHorizontal: 23,
    paddingTop: 30,
    paddingBottom: 39,
    flex: 1,
  },
  title: {
    fontSize: 20.74,
    fontWeight: "600",
    paddingBottom: 20,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#555",
    textAlign: "left",
    marginBottom: 20,
  },
  subtitletwo: {
    fontSize: 14,
    fontWeight: "400",
    color: "#555",
    textAlign: "left",
    marginBottom: 12,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  codeBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: 49,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom: 32,
  },
  buttonBox: {
    marginBottom: 15,
    flex: 0.5,
  },
  faceIDContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  FaceId: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  faceIDButtonGroup: {
    width: "100%",
    flex: 0.5,
    gap: 12,
  },
});

export default RegistrationFlow;
