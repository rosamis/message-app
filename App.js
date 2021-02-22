/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import MessageDetails from "./src/screens/MessageDatails";
// import LinearGradient from 'react-native-linear-gradient'

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Messages",
            headerStyle: {
              backgroundColor: "#937ff0",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Details"
          component={MessageDetails}
          options={{
            title: "Person",
            headerStyle: {
              backgroundColor: "#937ff0",
            },
            headerTintColor: "#fff",
            // headerBackground: (
            //   <LinearGradient
            //     colors={["#a13388", "#10356c"]}
            //     style={{ flex: 1 }}
            //     start={{ x: 0, y: 0 }}
            //     end={{ x: 1, y: 0 }}
            //   />
            // ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
