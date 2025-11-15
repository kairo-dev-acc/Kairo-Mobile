import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";
import COLORS from "../constants/Color";

export function LoaderBars() {
  const bars = [useRef(new Animated.Value(1)).current,
                useRef(new Animated.Value(1)).current,
                useRef(new Animated.Value(1)).current];

  useEffect(() => {
    const animations = bars.map((bar, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(bar, {
            toValue: 0.3,
            duration: 300,
            delay: index * 120, // stagger each bar
            useNativeDriver: true,
          }),
          Animated.timing(bar, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      )
    );

    animations.forEach((anim) => anim.start());

    return () => animations.forEach((anim) => anim.stop());
  }, []);

  return (
    <View style={styles.loadingBox}>
      {bars.map((bar, index) => (
        <Animated.View
          key={index}
          style={[
            styles.loadingIcon,
            { opacity: bar },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingBox: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingIcon: {
    width: 5.7,
    height: 5.7,
    backgroundColor: COLORS.shark[200],
    borderRadius: 100,
  },
});
