import { StyleSheet } from "react-native";
import styled from "styled-components";

export const styles = StyleSheet.create({
  containerSender: {
    padding: 11,
    backgroundColor: "#937ff0",
    borderBottomStartRadius: 15,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    alignSelf: "flex-end",
    margin: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    tintColor: "#ffff",
  },
  containerReceiver: {
    padding: 11,
    backgroundColor: "#ffff",
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
