import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MessageReceived from "../../components/MessageReceived";

const MessageDetails = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: data.name });
  }, [navigation, data.name]);

  return (
    <SafeAreaView>
      <MessageReceived message={data.message} date={data.date} />
    </SafeAreaView>
  );
};

export default MessageDetails;
