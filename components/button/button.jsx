// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function buttonDark({
  textName,
  TextColor,
  backgroundColor,
  onPressfunction,
  icon,
  iconSvg,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPressfunction}
    >
      {iconSvg}
      <Text style={[styles.text, { color: TextColor }]}>
        {icon}
        {textName}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 16,
    marginHorizontal: 27,
  },
  text: {
    fontSize: 17.28,
    fontWeight: 500,
    textAlign: "center",
    textEdge: "cap",
  },
});
