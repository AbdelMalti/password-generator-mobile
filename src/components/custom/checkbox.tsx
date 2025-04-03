import { Text, TouchableOpacity, View } from 'react-native';
import CheckBoxProps from '../../utils/checkBoxProps';


const Checkbox = ( props: CheckBoxProps ) => {
    return (
        <View style={props.style?.checkboxElement}>
            <TouchableOpacity style={props.style!.checkbox} onPress={props.onPress}>
                {props.checked && <Text style={props.style!.checkmark}>✔️</Text>}
            </TouchableOpacity>
            <Text> {props.label} </Text>
        </View>
    );
};

export default Checkbox;
