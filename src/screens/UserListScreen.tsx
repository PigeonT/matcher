import {ScrollView, StyleSheet, View} from "react-native";
import {Avatar, ListItem} from "@rneui/themed";
import globalStyles from "../globals/styles/global-styles";
import {useEffect, useState} from "react";
import userService from '../services/users/UserService';
import {User} from "../models/User";

const styles = StyleSheet.create({
    ...globalStyles
});
const UserListScreen = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        (async () => {
            const users: Array<User> = (await userService.fetchUserList()).data.users;
            setUserList(users);
        })();
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    userList.map((l, i) => (
                        <ListItem
                            onPress={() => {
                            }}
                            key={i}
                            bottomDivider>
                            <Avatar
                                rounded
                                source={{uri: l.image}}
                            />
                            <ListItem.Content>
                                <ListItem.Title>{l.username}</ListItem.Title>
                                <ListItem.Subtitle>{l.image}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
        </View>

    );
};
export default UserListScreen;