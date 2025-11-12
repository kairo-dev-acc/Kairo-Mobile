const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary.white,
    justifyContent: "space-between",
  },
  progressContainer: {
    height: 4,
    width: "100%",
    backgroundColor: COLORS.shark[200],
    overflow: "hidden",
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: COLORS.Tiber[700],
    borderRadius: 2,
  },
  view: {
    flex: 2,
    paddingHorizontal: 28,
  },
  viewTwo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    paddingHorizontal: 28,
  },
  backIcon: {
    marginHorizontal: 23,
    paddingTop: 30,
    paddingBottom: 39,
    flex: 1,
  },
  title: {
    fontSize: 20.74,
    fontWeight: "600",
    paddingBottom: 20,
    color: COLORS.shark[900],
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.shark[400],
    textAlign: "center",
    marginBottom: 20,
    paddingRight: 20,
  },
  subtitletwo: {
    fontSize: 14,
    color: COLORS.shark[400],
    paddingLeft: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  codeBox: {
    borderWidth: 1,
    borderColor: COLORS.shark[200],
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonBox: {
    marginBottom: 15,
    flex: 0.5,
  },
  faceIDContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
