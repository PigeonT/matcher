import {StyleSheet, Text, View} from "react-native";
import globalStyles from "../globals/styles/global-styles";
import {Image} from '@rneui/themed';
import {useEffect, useState} from "react";
import {User} from "../models/User";
import profileService from "../services/profiles/ProfileService";

const styles = StyleSheet.create({
    ...globalStyles,
    container: {
        flex: 1,
    },
    profileImage: {
        flex: 1,
    },
    profileName: {
        flex: 1,
        textAlign: "center",
        marginTop: 6,
    },
    description: {
        flex: 2,
        textAlign: "center",
    }
});
const ProfileScreen = () => {
    const [user, setUser] = useState({} as User);
    useEffect(() => {
        (async () => {
            const user: User = (await profileService.getCurrentUser()).data;
            setUser(user);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={{uri: user.image}}
                containerStyle={styles.profileImage}
            />
            <Text style={styles.profileName}>{user.username}</Text>
            <Text style={styles.description}>{'Profile Screen'}</Text>
        </View>
    );
};

export default ProfileScreen;