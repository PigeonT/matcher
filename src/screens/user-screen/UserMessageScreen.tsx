import {StyleSheet, Text, View} from "react-native";
import globalStyles from "../../globals/styles/global-styles";
import {Button} from "@rneui/base";

const styles = StyleSheet.create({
    ...globalStyles
});
const UserMessageScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>User Message Screen</Text>
            <Button onPress={() => {
                props.navigation.goBack();
            }}>Back</Button>
        </View>

    );
};
export default UserMessageScreen;