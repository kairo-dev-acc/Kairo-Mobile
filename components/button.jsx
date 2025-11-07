// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLOR } from "../constants/color.js";

export default function button({ textName, TextColor, backgroundColor, onPressfunction }) {
  return (
      
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: backgroundColor },
          ]}
          onPress={onPressfunction}
        >
          <Text style={[styles.text,
            { color: TextColor }
          ]}>{textName}</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginHorizontal: 27,
  },
  text: {
    fontSize: 17.28,
    fontWeight: 500,
    lineHeight: "normal",
    textAlign: "center",
    textEdge: "cap",
  },
});