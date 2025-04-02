import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent, View } from "react-native";

type CheckBoxProps = {
    checked: boolean;
    onPress: (event: GestureResponderEvent) => void;
    label: string;
}

const Checkbox = ( props: CheckBoxProps ) => {
    return (
        <View style={styles.container}>
            <Text> {props.label} </Text>
            <TouchableOpacity style={styles.checkbox} onPress={props.onPress}>
                {props.checked && <Text style={styles.checkmark}>✔️</Text>}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        flexDirection: 'row', // Aligns children in a row (horizontally)
        alignItems: 'center', // Align items vertically in the center
        gap: 20,
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 5,
    },
    checkmark: {
        fontSize: 20,
    },
});

export default Checkbox;
