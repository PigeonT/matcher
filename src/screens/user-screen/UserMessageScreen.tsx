import {StyleSheet, Text, View} from "react-native";
import globalStyles from "../../globals/styles/global-styles";
import {Button} from "@rneui/base";
import {StackScreenProps} from "@react-navigation/stack";
import {UserScreenStack} from "../UserScreen";

const styles = StyleSheet.create({
    ...globalStyles
});
type Props = StackScreenProps<UserScreenStack, 'UserMessageScreen'>;
const UserMessageScreen = (props: Props) => {
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