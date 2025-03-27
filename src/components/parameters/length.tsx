import React, { useRef, useState } from 'react';
import Slider from '../custom/slider';
import { StyleSheet, TextInput, View } from 'react-native';

type PasswordLengthProps = {
    maxCharacters: number;
    minCharacters: number;
}

const PasswordLength = ( props: PasswordLengthProps ) => {

    const sliderPercentage = useRef('150');
    console.log(`sliderPercentage : ${sliderPercentage}`);

    const [ passLength, setPassLength ] = useState('10');


    /*
    Example :
        length of slider is 150 (maxLimit)
        maximum number of character for password is 55 (props.maxCharacters)
        and minimum number of character for password is 5 (props.minCharacters)
        so
                props.minCharacters = 5
                props.maxCharacters = 55
                maxLimit = 150

        if newValue is 100, that means that the slider is at 2/3 of its total value,
        so the max number of character for the password should be around 33

    */
    const onDataReceived = (newValue: string, maxLimit: number) => {

        const newValueInt = Number(newValue); // 100
        const oneUnit = (maxLimit / (props.maxCharacters - props.minCharacters)); // 150 / (55 - 5) = 3
        const newPassLength = (newValueInt / oneUnit) + props.minCharacters; // (100 / 3) + 5 = 38.3333
        const roundedNumber = Math.round(Number(newPassLength)); // 38

        setPassLength( String(roundedNumber) );
    };

    return(
        <View style={styles1.container}>
            <Slider styleSlider={styles1} onDataReceived={(newValue: string, maxLimit: number) => onDataReceived(newValue, maxLimit)}/>
            <TextInput
                keyboardType="numeric"
                style={styles1.input}
                value={passLength}
            />
        </View>
    );
};

const styles1 = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    track: {
        backgroundColor: 'black',
        },
    thumb: {
        backgroundColor: 'orange',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 10,
    },
});

export default PasswordLength;
