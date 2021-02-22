import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import MessageBox from "../../components/MessageBox";
import messageList from "../../../back/data.json";
import { useNavigation } from "@react-navigation/native";
import api, { getMessages } from "../../service/api";
import { useEffect } from "react";



const Home = () => {
  const navigation = useNavigation();
  // const [incidents, setIncidents] = useState([]);
  let sortedMessage = messageList.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  async function loadMessages() {
    const response = await api.get("messages");
    console.log(response)
  }
  useEffect(() => {
    // getMessages()
    loadMessages();
  }, []);
  const messagesList = sortedMessage.length ? (
    sortedMessage.map((data) => {
      return <MessageBox data={data} navigation={navigation} key={data.id} />;
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
