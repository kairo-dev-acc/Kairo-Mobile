// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const VerifySingUp = () => {
  const swiperRef = useRef(null);

  const handleNext = (index) => {
    if (swiperRef.current && index < 5) {
      swiperRef.current.scrollBy(1);
    }
  };

  const renderContinue = (index) => (
    <TouchableOpacity style={styles.button} onPress={() => handleNext(index)}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination
        dotStyle={{ backgroundColor: '#ccc' }}
        activeDotStyle={{ backgroundColor: '#00796b' }}
      >
        {/* Screen 1: Verify Email */}
        <View style={styles.slide}>
          <Text style={styles.title}>Verify your Email</Text>
          <Text style={styles.subtitle}>A code was sent to your phone number. Please enter the code below.</Text>
          <View style={styles.codeContainer}>
            {['3', '5', '6', '7', '7', '2'].map((num, i) => (
              <View key={i} style={styles.codeBox}><Text>{num}</Text></View>
            ))}
          </View>
          {renderContinue(0)}
        </View>

        {/* Screen 2: Phone Number */}
        <View style={styles.slide}>
          <Text style={styles.title}>What's your phone number?</Text>
          <Text style={styles.subtitle}>We'll text you a verification code. Message and data rates may apply.</Text>
          <TextInput
            style={styles.input}
            placeholder="+234 123 456 7890"
            keyboardType="phone-pad"
          />
          {renderContinue(1)}
        </View>

        {/* Screen 3: Verify Phone */}
        <View style={styles.slide}>
          <Text style={styles.title}>Verify your phone number</Text>
          <Text style={styles.subtitle}>Enter the code below.</Text>
          <View style={styles.codeContainer}>
            {['3', '5', '6', '7', '7', '2'].map((num, i) => (
              <View key={i} style={styles.codeBox}><Text>{num}</Text></View>
            ))}
          </View>
          {renderContinue(2)}
        </View>

        {/* Screen 4: Name */}
        <View style={styles.slide}>
          <Text style={styles.title}>What's your Name?</Text>
          <TextInput style={styles.input} placeholder="First name" />
          <TextInput style={styles.input} placeholder="Middle name (optional)" />
          <TextInput style={styles.input} placeholder="Last name" />
          {renderContinue(3)}
        </View>

        {/* Screen 5: Location */}
        <View style={styles.slide}>
          <Text style={styles.title}>What's your Location?</Text>
          <Text style={styles.subtitle}>Enable location to access nearby services and sellers.</Text>
          {renderContinue(4)}
        </View>

        {/* Screen 6: All Set */}
        <View style={styles.slide}>
          <Text style={styles.title}>You’re all set 🎉</Text>
          <Text style={styles.subtitle}>Welcome aboard!</Text>
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  codeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#00796b',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default VerifySingUp;
