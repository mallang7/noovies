import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { useEffect } from "react";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => route?.state?.routeNames[route.state.index] || "Movies"

export default ({navigation, route}) => {
    useLayoutEffect( () => {
        navigation.setOptions({
            title: getHeaderName(route)
        });
    }, [route]);
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Movies" component={Movies}/>
            <Tabs.Screen name="Tv" component={Tv}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="Favourites" component={Favs}/>
            </Tabs.Navigator>
            );
}