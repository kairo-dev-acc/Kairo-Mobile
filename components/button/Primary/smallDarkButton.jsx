import { Pressable, StyleSheet, Text } from "react-native";
import COLORS from "../../../constants/Color";
import FONTS from "../../../constants/fonts";
import { LoaderBars } from "../../LoaderBars";

export default function SmallDarkButton({
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
        <Text style={[styles.text, isDisabled && styles.textDisabled]}>
          {textName}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
    width: 176,
    height: 42, // ✔️ Corrected height
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: COLORS.Tiber[700],
  },
  buttonPressed: {
    opacity: 0.7,
    backgroundColor: COLORS.Tiber[500],
  },
  buttonDisabled: {
    backgroundColor: COLORS.Tiber[100],
    opacity: 0.5,
  },
  text: {
    ...FONTS.Medium.Body[2], // ✔️ More readable small variant (14px)
    lineHeight: 20,         // ✔️ Center text vertically
    color: COLORS.primary.white,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  textDisabled: {
    color: COLORS.primary.white + "80",
  },
});
