// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------




import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform

} from "react-native";
import { Ionicons } from '@expo/vector-icons'; // For the Face ID icon
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button.jsx";
import Input from "../../components/InPut.jsx";

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

   const screens = [
    'Verify your Email',
    "What's your phone number?",
    'Verify your phone number',
    "What's your Name?",
    "What's your Location?",
    'Secure your details',
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
            <Link asChild href="(auth)/singUp">
              <TouchableOpacity style={styles.backIcon}>
                <Feather name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            </Link>

            <Text style={styles.title}>Verify your Email</Text>
            <Text style={styles.subtitle}>
              A code was sent to your phone number. Please enter the code below.
            </Text>
            <View style={styles.codeContainer}>
              {["-", "-", "-", "-", "-", "-"].map((num, i) => (
                <View key={i} style={styles.codeBox}>
                  <Text>{num}</Text>
                </View>
              ))}
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
            <Text style={styles.title}>What's your phone number?</Text>
            <Text style={styles.subtitle}>
              We'll text you a verification code. Message and data rates may
              apply.
            </Text>
            <Input
              value={phone}
              onChange={handleChangePhone}
              placeholder="+234 123 456 7890"
              error={phoneError}
              keyboardType="phone-pad"
            />

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

            <Text style={styles.title}>Verify your phone number</Text>
            <Text style={styles.subtitle}>Enter the code below.</Text>
            <View style={styles.codeContainer}>
              {["-", "-", "-", "-", "-", "-"].map((num, i) => (
                <View key={i} style={styles.codeBox}>
                  <Text>{num}</Text>
                </View>
              ))}
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
            <Text style={styles.title}>What's your Name?</Text>
            <Input
              value={FirstName}
              onChange={handleChangeFirstName}
              placeholder="First name"
              error={FirstNameError}
            />
            <Input
              value={MiddleName}
              onChange={handleChangeMiddleName}
              placeholder="Middle name (optional)"
            />
            <Input
              value={LastName}
              onChange={handleChangeLastName}
              placeholder="Last name"
              error={LastNameError}
            />
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

            <Text style={styles.title}>What's your Location?</Text>
            <Text style={styles.subtitle}>
              Enable location to access nearby services and sellers.
            </Text>

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
              <View style={styles.faceIDContainer}>
            
            <Text style={styles.title}>Secure your details</Text>
            <Text style={styles.subtitle}>Turn on Face ID to secure your Kairo app</Text>

            <View style={{ width: '100%', marginTop: 60 }}>
               <Button
                textName="Enable Face ID"
                TextColor="#fff"
                backgroundColor="#156F70"
                onPressfunction={handleContinue}
              />
                <Button
                textName="Skip, I’ll do that later"
                TextColor="#fff"
                backgroundColor="#115b5cff"
                onPressfunction={handleContinue}
              />
            </View>
          </View>
          </>
        );
      case 6:
        return (
          <>
            <Link asChild href="/(tabs)">
              <Text style={styles.title}>You’re all set</Text>
            </Link>
            <Text style={styles.subtitle}>Welcome aboard!</Text>

            <View style={styles.buttonBox}>
              <Button
                textName="Continue"
                TextColor="#fff"
                backgroundColor="#156F70"
              />
            </View>
          </>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    paddingLeft: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  codeBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonBox: {
    marginTop: 200,
    marginBottom: 1,
  },
  faceIDContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistrationFlow;
