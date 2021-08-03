import React from "react";
import Home from "../screens/Movies";
import Detail from "../screens/Detail";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name = "Tabs" component = {Tabs} />
        <Stack.Screen name = "Detail" component = {Detail} />
    </Stack.Navigator>
);