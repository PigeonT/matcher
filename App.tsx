import {MaterialCommunityIcons} from "@expo/vector-icons";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";
import UserListScreen from "./src/screens/UserListScreen";
import HomeScreen from "./src/screens/HomScreen";

const Tab = createBottomTabNavigator();

const makeIconRender = (name) => {
    return ({color, size}) => (
        <MaterialCommunityIcons name={name}
                                color={color}
                                size={size}/>
    );
}
export default () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="UserListScreen"
                        component={UserListScreen}
                        options={{tabBarIcon: makeIconRender("cog")}}
                    />
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{tabBarIcon: makeIconRender("home")}}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

