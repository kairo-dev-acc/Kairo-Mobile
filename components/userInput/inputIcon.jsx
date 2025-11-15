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
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/Color";
import FONTS from "../../constants/fonts";

export default function InputIcon({
  value: propValue = "",
  onChange,
  placeholder,
  error,
  keyboardType,
  IconImage,
  IconFunction,
  ShowIconFunction,
}) {
  const [text, setText] = useState(propValue);

  useEffect(() => {
    setText(propValue);
  }, [propValue]);

  const handleChange = (newText) => {
    setText(newText);
    onChange?.(newText);
  };

  return (
    <View style={{ marginBottom: error ? 12 : 0 }}>
      <View
        style={[
          styles.inputContainer,
          text.length > 0 ? styles.inputActive : null, // Only show border when typing
          error ? styles.inputError : null, // Error overrides all
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={
            error ? COLORS.primary.Error : COLORS.shark[300]
          }
          value={text}
          onChangeText={handleChange}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />

        {ShowIconFunction ? (
          <TouchableOpacity onPress={IconFunction}>
            <MaterialIcons
              name={IconImage}
              size={20}
              color={
                error
                  ? COLORS.primary.Error
                  : text.length > 0
                  ? COLORS.shark[950]
                  : COLORS.shark[300]
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <MaterialIcons
            name="email"
            size={20}
            color={
              error
                ? COLORS.primary.Error
                : text.length > 0
                ? COLORS.shark[950]
                : COLORS.shark[300]
            }
            style={styles.icon}
          />
        )}
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <MaterialIcons name="error" size={20} color={COLORS.primary.Error} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 48,
    backgroundColor: COLORS.shark[50],
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 0, // No border by default
    width: 346,
  },
  icon: {
    marginLeft: 12,
  },
  input: {
    flex: 1,
    color: COLORS.shark[950],
    ...FONTS.Regular.Body[1],
  },
  inputActive: {
    borderColor: COLORS.shark[950],
    borderWidth: 2, // Only while text exists
  },
  inputError: {
    borderColor: COLORS.primary.Error,
    backgroundColor: COLORS.primary.Errorbackground,
    borderWidth: 2,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    gap: 4,
  },
  errorText: {
    color: COLORS.primary.Error,
    ...FONTS.Regular.Body[3],
  },
});
