import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../../constants/Color";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  headlineWrap: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
  },
  headlineTop: {
    color: "#FFF",
    fontWeight: "700",
    marginTop: 8,
  },
  headlineBottom: {
    color: COLORS.emerald[500],
    fontWeight: "900",
    marginBottom: 25,
  },
  bottomCard: {
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 28,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonWrapper: {
    gap: 14,
    marginBottom: 18,
  },
  signUpButton: {
    backgroundColor: COLORS.emerald[500],
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: "center",
  },
  signUpText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  signInButton: {
    borderColor: COLORS.emerald[500],
    borderWidth: 1.5,
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: "center",
  },
  signInText: {
    color: COLORS.emerald[500],
    fontSize: 16,
    fontWeight: "600",
  },
  privacyText: {
    textAlign: "center",
    color: "#666",
    fontSize: 13,
    lineHeight: 18,
  },
  linkText: {
    color: "#000",
    fontWeight: "600",
  },
  bottomPrivecy: {
    flexDirection: "column",
    alignItems: "center",
  },
  bottomTerms: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
});
