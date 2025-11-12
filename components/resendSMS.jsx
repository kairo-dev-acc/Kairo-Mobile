// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function resendSMS({ textName, TextColor, backgroundColor, onPressfunction, icon, iconSvg }) {
  return (
      
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: backgroundColor },
          ]}
          onPress={onPressfunction}
        >
          {iconSvg}
          <Text style={[styles.text,
            { color: TextColor }
          ]}>{icon}{textName}</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    alignItems: "center",
    alignItems: "stretch",
    gap: 10,
    justifyContent: "center",
    width:154,
    height:44,
    marginVertical: 12,
  },
  text: {
    fontSize: 17.28,
    fontWeight: 500,
    textAlign: "center",
    textEdge: "cap",
  },
});