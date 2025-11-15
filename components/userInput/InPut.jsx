// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import COLORS from "../../constants/Color";
import FONTS from "../../constants/fonts";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function Inputicon({
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
          placeholderTextColor={error ? COLORS.primary.thunderbird : "#999"}
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
              <MaterialIcons name="error" size={20} color={COLORS.primary.thunderbird} />
            </Text>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    gap: 4,
    height: 48,
    backgroundColor: "#F6F6F6",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"stretch",
    color: "#000",
    ...FONTS.Regular.Body[1],
    width: 346,
  },
  inputFocused: {
    borderColor: "#393838ff",
    borderWidth: 2,
  },
  inputActive: {
    borderColor: "#393838ff",
  },
  inputError: {
    borderColor:  COLORS.primary.thunderbird,
    backgroundColor: "#FFF2F2",
    borderWidth: 2,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    gap: 4,
    },
  errorIcon: {
    color: COLORS.primary.thunderbird,
  },
  errorText: {
    color: COLORS.primary.thunderbird,
    ...FONTS.Regular.Body[3]
  },
});
