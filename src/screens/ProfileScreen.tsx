import {StyleSheet, Text, View} from "react-native";
import globalStyles from "../globals/styles/global-styles";

const styles = StyleSheet.create({
    ...globalStyles
});
const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>{'Profile Screen'}</Text>
        </View>
    );
};

export default ProfileScreen;