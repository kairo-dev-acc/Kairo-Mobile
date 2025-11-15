import { StyleSheet, Text, Pressable, View } from "react-native";
import COLORS from "../../../constants/Color";
import FONTS from "../../../constants/fonts";
import { LoaderBars } from "../../LoaderBars"; // <-- import it

export default function buttonLightIcon({
  textName,
  onPressfunction,
  icon,
  iconSvg,
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
        <View style={styles.textBox}>
            <View style={styles.iconBox}>
          {iconSvg}
            </View>
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
    padding: 20,
    borderRadius: 40,
    width: 346,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: COLORS.emerald[100],
  },
  buttonPressed: {
    // opacity: 0.7,
    backgroundColor: COLORS.Tiber[200],
  },
  buttonDisabled: {
    backgroundColor: COLORS.Tiber[100],
    // opacity: 0.5,
  },
  text: {
    ...FONTS.Medium.Body[1],
    color: COLORS.primary.white,
  },
  textDisabled: {
    color: COLORS.primary.white + "80",
  },
  textBox:{
    flexDirection: "row",
    gap:10,
    justifyContent: "center",
    alignItems:"center",
  },
  iconBox:{
    width:24,
    height:24,
    flexShrink:0,
  }
});
