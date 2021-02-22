import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import studentList from "../back/data.json";

class DemoApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text>Student List</Text>
        <View style={{ backgroundColor: "black" }}>
          <FlatList
            data={studentList}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View>
                <Text>{item.name}</Text>
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

export default DemoApp;
