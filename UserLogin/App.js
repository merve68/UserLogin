import React from "react";
import {View} from "react-native";

import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./screens/Register";
import Login from "./screens/Login";

const Stack = createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={'Login'}>
        <Stack.Screen 
        name="Login"
        component={Login}
        />
        <Stack.Screen
        name="Register"
        component={Register}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;