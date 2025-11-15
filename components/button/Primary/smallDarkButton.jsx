import { Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../../../constants/Color";
import FONTS from "../../../constants/fonts";
import { LoaderBars } from "../../LoaderBars";

export default function smallDarkButton({
  textName,
  onPressfunction,
  disabled = false,
  loading = false,
}) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPressfunction}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.button,
        pressed && !isDisabled && styles.buttonPressed,
        isDisabled && styles.buttonDisabled,
      ]}
    >
      {loading ? (
        <LoaderBars />
      ) : (
        <View>
          <Text style={[styles.text, isDisabled && styles.textDisabled]}>
            {textName}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 40,
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    width: 176,
    height: 12,
    gap:10,
    backgroundColor: COLORS.Tiber[700],
  },
  buttonPressed: {
    // opacity: 0.7,
    backgroundColor: COLORS.Tiber[500],
  },
  buttonDisabled: {
    backgroundColor: COLORS.Tiber[100],
    // opacity: 0.5,
  },
  text: {
    ...FONTS.Medium.Body[4],
    color: COLORS.primary.white,
  },
  textDisabled: {
    color: COLORS.primary.white,
  },
});
