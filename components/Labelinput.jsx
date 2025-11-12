import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Animated } from "react-native";

export default function Labelinput({
  value: propValue = "",
  onChange,
  placeholder,
  error,
  keyboardType,
  LabelName,
}) {
  const [text, setText] = useState(propValue);
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = new Animated.Value(propValue ? 1 : 0);

  useEffect(() => {
    setText(propValue);
    Animated.timing(labelPosition, {
      toValue: propValue ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [propValue]);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(labelPosition, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      Animated.timing(labelPosition, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleChange = (newText) => {
    setText(newText);
    onChange?.(newText);
  };

  const labelStyle = {
    position: "absolute",
    left: 16,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 6],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 10],
    }),
    color: error
      ? "#D93025"
      : isFocused
      ? "#474747ff"
      : "#777",
  };

  return (
    <View style={{ marginBottom: error ? 28 : 20 }}>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
      >
        <Animated.Text style={labelStyle}>{LabelName}</Animated.Text>

        <TextInput
          style={styles.input}
          value={text}
          onChangeText={handleChange}
          placeholder={isFocused ? "" : placeholder}
          placeholderTextColor="#aaa"
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
      </View>

      {error ? (
        <View style={styles.errorContainer}>
          <MaterialIcons name="error" size={16} color="#D93025" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    backgroundColor: "#FAFAFA",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    height: 64,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginHorizontal: 27,
  },
  input: {
    fontSize: 17.28,
    color: "#222",
    paddingTop: 18,
    paddingBottom: 6,
  },
  inputFocused: {
    borderColor: "#4b484fff",
    backgroundColor: "#F8F3FF",
  },
  inputError: {
    borderColor: "#D93025",
    backgroundColor: "#FFF2F2",
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginHorizontal: 27,
  },
  errorText: {
    color: "#D93025",
    fontSize: 14,
    marginLeft: 4,
  },
});
