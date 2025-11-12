import { StyleSheet, Dimensions, Platform } from "react-native";
import COLORS from "../../../constants/Color.js";

const { width, height } = Dimensions.get("window");
const CARD_RADIUS = 28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.shark[950],
  },

  imageBackground: {
    width,
    justifyContent: "flex-end",
  },

  headlineWrap: {
    position: "absolute",
    top: Math.round(height * 0.28) - 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },

  pin: {
    fontSize: 64,
    marginBottom: 6,
    color: COLORS.emerald[500],
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  headlineTop: {
    fontSize: 64,
    color: COLORS.primary.white,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 50,
  },

  headlineBottom: {
    fontSize: 64,
    color: COLORS.emerald[500],
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 56,
  },

  bottomCard: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.primary.white,
    borderTopLeftRadius: CARD_RADIUS,
    borderTopRightRadius: CARD_RADIUS,
    paddingHorizontal: 24,
    paddingTop: 20,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shark[900],
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  buttonWrapper: {
    width: "100%",
    alignItems: "center",
  },

  signUpButton: {
    backgroundColor: COLORS.emerald[600],
    width: "90%",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 14,
  },
  signUpText: {
    color: COLORS.primary.white,
    fontSize: 18,
    fontWeight: "700",
  },

  signInButton: {
    width: "90%",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: COLORS.emerald[600],
    backgroundColor: "transparent",
  },
  signInText: {
    color: COLORS.emerald[600],
    fontSize: 17,
    fontWeight: "700",
  },

  privacyText: {
    color: COLORS.shark[400],
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },
  linkText: {
    color: COLORS.shark[950],
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});

export default styles;
