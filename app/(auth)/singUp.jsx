import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegistrationFlow = () => {
  const [step, setStep] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;

  const screens = [
    'Verify your Email',
    "What's your phone number?",
    'Verify your phone number',
    "What's your Name?",
    "What's your Location?",
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

  const handleContinue = () => {
    if (step < screens.length - 1) {
      setStep(step + 1);
    }
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  // --- Each Step UI ---
  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Text style={styles.title}>Verify your Email</Text>
            <Text style={styles.subtitle}>A code was sent to your phone number. Please enter the code below.</Text>
            <View style={styles.codeContainer}>
              {['3', '5', '6', '7', '7', '2'].map((num, i) => (
                <View key={i} style={styles.codeBox}><Text>{num}</Text></View>
              ))}
            </View>
          </>
        );

      case 1:
        return (
          <>
            <Text style={styles.title}>What's your phone number?</Text>
            <Text style={styles.subtitle}>We'll text you a verification code. Message and data rates may apply.</Text>
            <TextInput
              style={styles.input}
              placeholder="+234 123 456 7890"
              keyboardType="phone-pad"
            />
          </>
        );

      case 2:
        return (
          <>
            <Text style={styles.title}>Verify your phone number</Text>
            <Text style={styles.subtitle}>Enter the code below.</Text>
            <View style={styles.codeContainer}>
              {['3', '5', '6', '7', '7', '2'].map((num, i) => (
                <View key={i} style={styles.codeBox}><Text>{num}</Text></View>
              ))}
            </View>
          </>
        );

      case 3:
        return (
          <>
            <Text style={styles.title}>What's your Name?</Text>
            <TextInput style={styles.input} placeholder="First name" />
            <TextInput style={styles.input} placeholder="Middle name (optional)" />
            <TextInput style={styles.input} placeholder="Last name" />
          </>
        );

      case 4:
        return (
          <>
            <Text style={styles.title}>What's your Location?</Text>
            <Text style={styles.subtitle}>Enable location to access nearby services and sellers.</Text>
          </>
        );

      case 5:
        return (
          <>
            <Text style={styles.title}>You're all set 🎉</Text>
            <Text style={styles.subtitle}>Welcome aboard!</Text>
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
      <View style={styles.content}>
        {renderScreen()}
      </View>

      {/* Continue Button */}
      {step < screens.length - 1 && (
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

// --- STYLES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  progressContainer: {
    height: 4,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#00796b',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
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
    width: '100%',
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
    marginBottom: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default RegistrationFlow;
