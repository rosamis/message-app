import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    borderBottomColor: "#ebebeb",
    borderBottomWidth: 1,
    padding: 11,
    backgroundColor: "#f8f9fc",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    // justifyContent: "flex-start",
    color: "#323232",
  },
  date: {
    color: "#cacacb",
    fontSize: 14,
    alignSelf: "flex-end",
  },
  flex: {
    display: "flex",
    flex: 1,
  },
  message: {
    color: "#525252",
  },
  dot: {
    borderRadius: 10,
    backgroundColor: "#927dfa",
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textDot: {
    color: "white",
  },
});
