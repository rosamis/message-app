import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { formatDate, formatHour } from "../utils";

const formatDateHour = (date) => {
  return formatDate(date) + " " + formatHour(date);
};

const MessageReceived = (props) => {
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.message}</Text>
        <Text style={styles.date}>{formatDateHour(new Date(props.date))}</Text>
      </View>
    </View>
  );
};

export default MessageReceived;
