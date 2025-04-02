import Slider from '../custom/slider';
import { StyleSheet, View } from 'react-native';

type PasswordLengthProps = {
    maxCharacters: number;
    minCharacters: number;
    onRelease: React.Dispatch<React.SetStateAction<number>>;
}

const PasswordLength = ( props: PasswordLengthProps ) => {
    return(
        <View style={styles1.container}>
            <Slider
                styleSlider={styles1}
                minCharacters={props.minCharacters}
                maxCharacters={props.maxCharacters}
                onRelease={props.onRelease}
            />
        </View>
    );
};

const styles1 = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        flexDirection: 'row', // Aligns children in a row (horizontally)
        alignItems: 'center', // Align items vertically in the center
        gap: 20,
    },
    track: {
        backgroundColor: '#33334d',
        },
    thumb: {
        backgroundColor: '#e28743',
    },
});

export default PasswordLength;
