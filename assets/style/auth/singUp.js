import { StyleSheet } from "react-native";
import COLORS from "../../../constants/Color.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary.white,
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
  },
  backIcon: {
    marginHorizontal: 23,
    paddingTop: 30,
    paddingBottom: 39,
  },
  logoContainer: {
    alignItems: "center",
  },
  emailSection: {
    marginTop: 76,
  },
  title: {
    fontFamily: "Poppins-Black",
    fontSize: 20.74,
    fontWeight: "600",
    marginBottom: 24,
    textAlign: "center",
    color: COLORS.shark[950],
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 27,
    marginHorizontal: 27,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.shark[100],
  },
  orText: {
    marginHorizontal: 12,
    color: COLORS.shark[400],
    fontSize: 17.28,
  },
  socialContainer: {
    marginBottom: 60,
    gap: 20,
  },
});

export default styles;
