import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { formatDate, formatHour } from "../utils";

const formatDateHour = (date) => {
  return formatDate(date) + " " + formatHour(date);
};

const Chat = (props) => {
  const messages = props.messages;
  let sortedMessage = messages.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const chatList = sortedMessage.length ? (
    sortedMessage.map((data) => {
      if (data.receiver) {
        return (
          <View style={{ display: "flex", flexDirection: "column" }} key={new Date(data.date).getTime()}>
            <View style={styles.containerReceiver}>
              <Text>{data.message}</Text>
              <Text style={styles.date}>
                {formatDateHour(new Date(data.date))}
              </Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={{ display: "flex", flexDirection: "column" }} key={new Date(data.date).getTime()}>
            <View style={styles.containerSender}>
              <Text style={{color: "#ffff"}}>{data.message}</Text>
              <Text style={styles.date}>
                {formatDateHour(new Date(data.date))}
              </Text>
            </View>
          </View>
        );
      }
    })
  ) : (
    <Text>Without message</Text>
  );
  return chatList;
};

export default Chat;
