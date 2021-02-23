import React from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { formatDate, formatHour } from "../utils";
import { messageService } from "../../service/api";

const MessageBox = (props) => {
  let data = props.data;
  let dateFile = new Date(data.date);
  let date = "";
  let current = new Date();

  if (formatDate(dateFile) < formatDate(current)) {
    date = formatDate(dateFile);
  } else {
    date = formatHour(dateFile);
  }

  return (
    <TouchableOpacity
      key={data.id}
      onPress={() => {
        props.navigation.navigate("Details", {
          data: data,
        });
        messageService
          .updateMessage(data.id)
          .then((res) => {
            props.messageClicked(1);
          })
          .catch((error) => console.log(error));
      }}
      style={styles.container}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.flex}>
          <Text style={styles.title}>{data.name}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 9 }}>
          <Text style={styles.message} numberOfLines={2} ellipsizeMode="tail">
            {data.message}
          </Text>
        </View>
        {data.read ? (
          <View></View>
        ) : (
          <View style={{ flex: 1 }}>
            <TouchableHighlight style={styles.dot}>
              <Text style={styles.textDot}>1</Text>
            </TouchableHighlight>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MessageBox;
