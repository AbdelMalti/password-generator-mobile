import { GestureResponderEvent } from 'react-native';

type CheckBoxProps = {
    style?: {
        checkboxContainer: {},
        checkboxElement: {},
        checkbox: {},
        checkmark: {}
    };
    checked: boolean;
    onPress: (event: GestureResponderEvent) => void;
    label: string;
}

export default CheckBoxProps;
