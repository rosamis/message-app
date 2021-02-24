import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import MessageBox from "../../components/MessageBox";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { messageService } from "../../service/api";

const Home = () => {
  const navigation = useNavigation();
  const [messageList, setMessageList] = useState([]);
  const [messageClicked, setMessageClicked] = useState([]);

  useEffect(() => {
    messageService
      .getMessages()
      .then((res) => {
        setMessageList(res.data);
      })
      .catch((error) => console.log(error));
    setMessageClicked(0);
  }, [messageClicked]);

  let sortedMessage = messageList.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const messagesList = sortedMessage.length ? (
    sortedMessage.map((data) => {
      return (
        <MessageBox
          data={data}
          navigation={navigation}
          key={data.id}
          messageClicked={setMessageClicked}
        />
      );
    })
  ) : (
    <Text>Without message</Text>
  );

  return (
    <SafeAreaView>
      <ScrollView>{messagesList}</ScrollView>
    </SafeAreaView>
  );
};

export default Home;
