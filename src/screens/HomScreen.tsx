import {StyleSheet, Text, View} from "react-native";
import {useReducer} from "react";
import {Button} from "@rneui/base";
import globalStyles from "../globals/styles/global-styles";

const styles = StyleSheet.create({
    ...globalStyles
});
type HomeState = {
    count: number;
}
type HomeActionCountOps = {
    type: 'INCREMENT_COUNT' | 'DECREMENT_COUNT';
}
type HomeActionResetOps = {
    type: 'SET_COUNT';
    payload: HomeState
}
type HomeAction = HomeActionCountOps | HomeActionResetOps;
const reducer = (state: HomeState, action: HomeAction) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT_COUNT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'SET_COUNT':
            return {
                ...state,
                count: action.payload.count
            };
    }
    return state
}
const HomeScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <View style={styles.container}>
            <Text>{state.count}</Text>
            <Button onPress={() => {
                dispatch({type: 'INCREMENT_COUNT'})
            }}>Add Count</Button>
            <Button onPress={() => {
                dispatch({type: 'DECREMENT_COUNT'})
            }}>Minus Count</Button>
            <Button onPress={() => {
                dispatch({type: 'SET_COUNT', payload: {count: 100}})
            }}>Set Count</Button>
        </View>
    );
};

export default HomeScreen;