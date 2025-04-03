import React, { useRef, useState } from 'react';
import {View, Animated, PanResponder, Text} from 'react-native';
import SliderProps from '../../utils/sliderProps';

const Slider = (props: SliderProps) => {

    const [ passLengthInput, setPassLengthInput ] = useState(props.minCharacters.toString());

    const maxLimit = (props.style!.track.width - props.style!.thumb.borderRadius);
    const minLimit = 0;

    const position = useRef(new Animated.ValueXY()).current;

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
    const onDataReceivedFromSlider = (sliderValue: string) => {

        const newValueInt = Number(sliderValue); // 100
        const oneUnit = (maxLimit / (props.maxCharacters - props.minCharacters)); // 150 / (55 - 5) = 3
        const newPassLength = (newValueInt / oneUnit) + props.minCharacters; // (100 / 3) + 5 = 38.3333
        const roundedNumber = Math.round(Number(newPassLength)); // 38

        setPassLengthInput( roundedNumber.toString() );
        props.onRelease( roundedNumber );
    };

    const setLimitPositionX = () => {

        // To make sure the position.x doesn't go out of bounds (clamping to min and max)
        const positionX = position.x.interpolate({
            inputRange: [minLimit, maxLimit], // The limits range
            outputRange: [minLimit, maxLimit], // Output to clamp values
            extrapolate: 'clamp', // Automatically clamp values to min/max
        });
        return positionX;
    };

    // const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [null, {dx: position.x }],
            {useNativeDriver: false}
        ),
        onPanResponderRelease: () => {
            position.extractOffset();
            onDataReceivedFromSlider(JSON.stringify(setLimitPositionX()));
        },
    });

    const panRef = useRef(panResponder).current;

    return (
        <>
            <View style={props.style!.track}>
                <Animated.View
                    style={[
                        props.style!.thumb,
                        {
                            left: position,
                            transform: [{translateX: setLimitPositionX()}],
                        },
                    ]}
                    {...panRef.panHandlers}
                />
            </View>
            <Text style={props.style!.input}>{passLengthInput.toString()} </Text>
        </>
    );
};

export default Slider;
