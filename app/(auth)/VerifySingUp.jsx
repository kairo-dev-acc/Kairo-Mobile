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
  StatusBar,
  KeyboardAvoidingView,   
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FaceId from "../../assets/images/ios-Face-ID.svg";
import Button from "../../components/button.jsx";
import Input from "../../components/InPut.jsx";
import Labelinput from "../../components/Labelinput.jsx";
import ResendSMS from "../../components/resendSMS.jsx";

const RegistrationFlow = () => {
  const [step, setStep] = useState(0);
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [FirstNameError, setFirstNameError] = useState("");
  const [LastNameError, setLastNameError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const progress = useRef(new Animated.Value(0)).current;

  const Router = useRouter();

  const screens = [
    "Verify your Email",
    "What's your phone number?",
    "Verify your phone number",
    "What's your Name?",
    "What's your Location?",
    "Secure your details",
    "You're all set 🎉",
  ];
  // Animate progress bar on step change
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

  const handleContinue = () => {
    if (step < screens.length - 1) {
      setStep(step + 1);
    }
  };
  const goBack = () => {
    if (step < screens.length - 1) {
      setStep(step - 1);
    }
  };

  const NamehandleChange = () => {
    if (!FirstName) {
      setFirstNameError("Please enter your First Name");
      return;
    }
    if (!LastName) {
      setLastNameError("Please enter your Last Name");
      return;
    }

    if (step < screens.length - 1) {
      setStep(step + 1);
    }
  };
  const phonehandleChange = () => {
    if (!phone) {
      setphoneError("Please enter a phone number");
      return;
    }

    if (step < screens.length - 1) {
      setStep(step + 1);
    }
  };

  const handleChangePhone = (text) => {
    setphoneError("");
    setPhone(text);
  };
  const handleChangeFirstName = (text) => {
    setFirstNameError("");
    setFirstName(text);
  };
  const handleChangeMiddleName = (text) => {
    setMiddleName(text);
  };
  const handleChangeLastName = (text) => {
    setLastNameError("");
    setLastName(text);
  };

  // --- Each Step UI ---
  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Link asChild href="/(auth)/signup" dismissTo>
              <TouchableOpacity style={styles.backIcon}>
                <Feather name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            </Link>

            <View style={styles.view}>
              <Text style={styles.title}>Verify your Email</Text>
              <Text style={styles.subtitle}>
                A code was sent to your email. Please enter the code below to
                continue
              </Text>
              <View style={styles.codeContainer}>
                {["-", "-", "-", "-", "-", "-"].map((num, i) => (
                  <View key={i} style={styles.codeBox}>
                    <Text>{num}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.subtitletwo}>Didn’t receive the code?</Text>
              <Text style={styles.subtitletwo}>
                go back, check your email and try agan
              </Text>
            </View>

            <View style={styles.buttonBox}>
              <Button
                textName="Continue"
                TextColor="#fff"
                backgroundColor="#156F70"
                onPressfunction={handleContinue}
              />
            </View>
          </>
        );

      case 1:
        return (
          <>
            <View style={styles.viewTwo}>
              <Text style={styles.title_}>What's your phone number?</Text>
              <View style={styles.phonesub}>
                <Text style={styles.subtitle_}>
                  We use your mobile number to identify your account.
                </Text>
                <Text style={styles.subtitle_}>
                  we’ll send a verification code to your number.
                </Text>
              </View>
              <Input
                value={phone}
                onChange={handleChangePhone}
                placeholder="+234 123 456 7890"
                error={phoneError}
                // keyboardType="numeric"
              />
            </View>

            <View style={styles.buttonBox}>
              <Button
                textName="Continue"
                TextColor="#fff"
                backgroundColor="#156F70"
                onPressfunction={phonehandleChange}
              />
            </View>
          </>
        );

      case 2:
        return (
          <>
            <TouchableOpacity style={styles.backIcon} onPress={goBack}>
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.view}>
              <Text style={styles.title}>Verify your phone number</Text>
              <Text style={styles.subtitle}>Enter the code below.</Text>
              <View style={styles.codeContainer}>
                {["-", "-", "-", "-", "-", "-"].map((num, i) => (
                  <View key={i} style={styles.codeBox}>
                    <Text>{num}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.subtitle_two}>Didn’t receive the code?</Text>
              <ResendSMS
                textName="Resend SMS"
                TextColor="#156F70"
                backgroundColor="#CFF8F3"
                onPressfunction={handleContinue}
              />
              <Text style={styles.subtitle}>Try again in 0:24 seconds.</Text>
            </View>

            <View style={styles.buttonBox}>
              <Button
                textName="Continue"
                TextColor="#fff"
                backgroundColor="#156F70"
                onPressfunction={handleContinue}
              />
            </View>
          </>
        );

      case 3:
        return (
          <>
            <View style={styles.viewTwo}>
              <Text style={styles.title_}>What’s your Name?</Text>
              <Text style={styles.subtitle_}>You’re almost done</Text>
              <Labelinput
                value={FirstName}
                onChange={handleChangeFirstName}
                placeholder="First name"
                error={FirstNameError}
                LabelName="name"
              />
              <Labelinput
                value={MiddleName}
                onChange={handleChangeMiddleName}
                placeholder="optional"
                LabelName="Middle name"
              />
              <Labelinput
                value={LastName}
                onChange={handleChangeLastName}
                placeholder="Last name"
                error={LastNameError}
                LabelName="Last name"
              />
            </View>
            <View style={styles.buttonBox}>
              <Button
                textName="Continue"
                TextColor="#fff"
                backgroundColor="#156F70"
                onPressfunction={NamehandleChange}
              />
            </View>
          </>
        );

      case 4:
        return (
          <>
            <TouchableOpacity style={styles.backIcon} onPress={goBack}>
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.view}>
              <Text style={styles.title}>What's your Location?</Text>
              <Text style={styles.subtitle}>
                Enable location to access services, sellers and businesses in
                your area
              </Text>
            </View>

            <View style={styles.buttonBox}>
              <Button
                textName="Continue"
                TextColor="#fff"
                backgroundColor="#156F70"
                onPressfunction={handleContinue}
              />
            </View>
          </>
        );

      case 5:
        return (
          <>
            {/* Face ID Icon + Text */}
            <View style={styles.view}>
              <View style={styles.faceIDContainer}>
                <View style={styles.FaceId}>
                  <FaceId />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>Secure your details</Text>
                  <Text style={styles.subtitle}>
                    Turn on Face ID to secure your Kairo app
                  </Text>
                </View>
                <View style={{ width: "100%", flex: 0.5, gap: 12 }}>
                  <Button
                    textName="Enable Face ID"
                    TextColor="#fff"
                    backgroundColor="#156F70"
                    onPressfunction={handleContinue}
                  />
                  <Button
                    textName="Skip, I’ll do that later"
                    TextColor="#156F70"
                    backgroundColor="#CFF8F3"
                    onPressfunction={handleContinue}
                  />
                </View>
              </View>
            </View>
          </>
        );
      case 6:
        return (
          <>
            <View style={styles.viewTwo}>
              <Link asChild href="/(tabs)">
                <Text style={styles.title_}>You’re all set</Text>
              </Link>
              <Text style={styles.subtitle_}>Welcome aboard!</Text>
            </View>

            <View style={styles.buttonBox}>
              <Button
                textName="Continue"
                TextColor="#fff"
                backgroundColor="#156F70"
                onPressfunction={() => {
                  Router.push("/(tabs)");
                }}
              />
            </View>
          </>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
          animated
          />
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
      </View>


      {/* Content */}
      <View style={styles.content}>{renderScreen()}</View>

    </SafeAreaView>
  );
};

// --- STYLES ---
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
  view: {
    flex: 2,
    paddingHorizontal: 28,
  },
  viewTwo: {
    justifyContent: "center",
    flex: 2,
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
  title_: {
    fontSize: 20.74,
    fontWeight: "600",
    paddingBottom: 20,
    paddingLeft: 28,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#555",
    textAlign: "left",
    marginBottom: 20,
    alignItems: "flex-end",
  },
  subtitle_two: {
    fontSize: 12,
    fontWeight: "400",
    color: "#555",
    textAlign: "left",
    alignItems: "flex-end",
  },
  subtitle_: {
    paddingLeft: 28,
    fontSize: 12,
    fontWeight: "400",
    color: "#555",
    alignItems: "flex-end",
  },
  phonesub: {
    marginBottom: 20,
  },
  subtitletwo: {
    fontSize: 14,
    fontWeight: "400",
    color: "#555",
    textAlign: "left",
    marginBottom: 12,
    alignItems: "flex-end",
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
});

export default RegistrationFlow;
