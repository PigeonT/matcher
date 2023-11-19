import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomScreen";
import UserScreen from "./src/screens/UserScreen";
import {Icon} from 'react-native-elements'
import ProfileScreen from "./src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const makeIconRender = (name) => {
    return ({color, size}) => (
        <Icon
            name={name}
            color={color}
            size={size}
            type='evilicon'
        />
    );
}
export default () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false
                    }}>
                    <Tab.Screen
                        name="UserScreen"
                        component={HomeScreen}
                        options={{tabBarIcon: makeIconRender("sc-telegram")}}
                    />
                    <Tab.Screen
                        name="Home"
                        component={UserScreen}
                        options={{tabBarIcon: makeIconRender("comment")}}
                    />
                    <Tab.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                        options={{tabBarIcon: makeIconRender("user")}}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

