import SliderProps from '../../utils/sliderProps';
import Slider from '../custom/slider';
import { View } from 'react-native';

const PasswordLength = ( props: SliderProps ) => {
    // Merging the styles with Object.assign
    return(
        <View style={props.style?.sliderContainer}>
            <Slider
                style={props.style}
                minCharacters={props.minCharacters}
                maxCharacters={props.maxCharacters}
                onRelease={props.onRelease}
            />
        </View>
    );
};

export default PasswordLength;
