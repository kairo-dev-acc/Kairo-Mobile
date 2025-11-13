// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function Input({
  value: propValue = "",
  onChange,
  placeholder,
  error,
  keyboardType,
}) {
  const [text, setText] = useState(propValue);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setText(propValue);
  }, [propValue]);

  const handleChange = (newText) => {
    setText(newText);
    onChange?.(newText);
  };

  return (
    
      <View style={{ marginBottom: error ? 12 : 0 }}>
        <TextInput
          style={[
            styles.input,
            isFocused && styles.inputFocused,
            text ? styles.inputActive : null,
            error ? styles.inputError : null,
          ]}
          placeholder={placeholder}
          placeholderTextColor={error ? "#D93025" : "#999"}
          value={text}
          onChangeText={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorIcon}>
              <MaterialIcons name="error" size={16} color="#D93025" />
            </Text>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 15,
    fontWeight: "400",
    marginHorizontal: 27,
    color: "#000",
    // width: 346,
  },
  inputFocused: {
    borderColor: "#393838ff",
    borderWidth: 2,
  },
  inputActive: {
    borderColor: "#393838ff",
  },
  inputError: {
    borderColor: "#D93025",
    backgroundColor: "#FFF2F2",
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 27,
  },
  errorIcon: {
    color: "#D93025",
    marginRight: 6,
    fontSize: 14,
  },
  errorText: {
    color: "#D93025",
    fontSize: 14,
  },
});
