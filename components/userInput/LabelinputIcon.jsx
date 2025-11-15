import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/Color";
import FONTS from "../../constants/fonts";

export default function LabelinputIcon({
  value: propValue = "",
  onChange,
  placeholder,
  error,
  keyboardType,
  LabelName,
  iconName = "email", // 👈 Add icon prop
  onIconPress,
}) {
  const [text, setText] = useState(propValue);
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = new Animated.Value(propValue ? 1 : 0);

  useEffect(() => {
    setText(propValue);
    Animated.timing(labelPosition, {
      toValue: propValue ? 1 : 0,
      duration: 130,
      useNativeDriver: false,
    }).start();
  }, [propValue]);

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
    color: error ? COLORS.primary.Error : isFocused ? "#474747ff" : "#777",
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

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={handleChange}
            placeholder={isFocused ? "" : placeholder}
            placeholderTextColor={
              error ? COLORS.primary.Error : COLORS.shark[300]
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            keyboardType={keyboardType}
            autoCapitalize="none"
          />

          <TouchableOpacity onPress={onIconPress}>
            <MaterialIcons
              name={iconName}
              size={22}
              color={
                error
                  ? COLORS.primary.Error
                  : isFocused
                  ? COLORS.shark[950]
                  : COLORS.shark[300]
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
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
    position: "relative",
    backgroundColor: COLORS.shark[50],
    borderRadius: 12,
    height: 64,
    gap: 12,
    width: 346,
    justifyContent: "center",
    padding: 12,
  },
  row: {
    paddingTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 17.28,
    color: "#222",
    paddingTop: 12,
    paddingBottom: 6,
  },
  icon: {
    marginLeft: 10,
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: COLORS.shark[500],
    backgroundColor: COLORS.shark[50],
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
