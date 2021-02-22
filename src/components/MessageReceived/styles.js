import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 11,
    backgroundColor: "#ffff",
    // borderRadius: 10,
    borderBottomEndRadius: 15,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    alignSelf: "baseline",
    margin: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  date: {
    color: "#cacacb",
    alignSelf: "flex-end",
  },
});
