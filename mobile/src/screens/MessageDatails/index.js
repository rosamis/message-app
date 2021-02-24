import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import Chat from "../../components/Chat";

const MessageDetails = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: data.name });
  }, [navigation, data.name]);

  return (
    <SafeAreaView>
      <Chat messages={data.messages} />
    </SafeAreaView>
  );
};

export default MessageDetails;
