import {ScrollView, StyleSheet, View} from "react-native";
import {Avatar, ListItem} from "@rneui/themed";
import globalStyles from "../../globals/styles/global-styles";
import {useEffect, useState} from "react";
import userService from '../../services/users/UserService';
import {User} from "../../models/User";
import {StackScreenProps} from "@react-navigation/stack";
import {UserScreenStack} from "../UserScreen";

const styles = StyleSheet.create({
    ...globalStyles
});
type Props = StackScreenProps<UserScreenStack, 'UserListScreen'>;
const UserListScreen = (props: Props) => {
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
                                props.navigation.navigate('UserMessageScreen')
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