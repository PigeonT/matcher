import {createNativeStackNavigator} from "@react-navigation/native-stack";
import UserMessageScreen from "./user-screen/UserMessageScreen";
import UserListScreen from "./user-screen/UserListScreen";

export type UserScreenStack = {
    UserListScreen: typeof UserListScreen;
    UserMessageScreen: typeof UserMessageScreen;
};

const Stack = createNativeStackNavigator<UserScreenStack>();
const UserScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="UserListScreen">
            <Stack.Screen name="UserListScreen"
                          component={UserListScreen}/>
            <Stack.Screen name="UserMessageScreen"
                          component={UserMessageScreen}/>
        </Stack.Navigator>
    );
};
export default UserScreen;