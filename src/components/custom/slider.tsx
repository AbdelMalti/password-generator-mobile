import React, { useRef } from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    track: {
        width: 250,
        height: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
        position: 'relative',
        marginTop: 10,
        },
    thumb: {
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        position: 'absolute',
        top: -5,
    },
});

const Slider = ({ styleSlider }: { styleSlider?: any }) => {
    // Merging the styles with Object.assign
    const combinedStyle = StyleSheet.create({
        container: { ...styles.container, ...(styleSlider?.container ? styleSlider.container : {}) }, // Merges both containers
        track: { ...styles.track, ...(styleSlider?.track ? styleSlider.track : {})}, // Merges both track styles
        thumb: { ...styles.thumb, ...(styleSlider?.thumb ? styleSlider?.thumb : {})}, // Merges both thumb styles
    });

    const maxLimit = (combinedStyle.track.width - combinedStyle.thumb.borderRadius );
    const minLimit = 0;

    const position = useRef(new Animated.ValueXY()).current;

    // const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [null, {dx: position.x }],
            {useNativeDriver: false}
        ),
        onPanResponderRelease: () => {
            position.extractOffset();
        },
    });

    // To make sure the position.x doesn't go out of bounds (clamping to min and max)
    const position_x = position.x.interpolate({
        inputRange: [minLimit, maxLimit], // The limits range
        outputRange: [minLimit, maxLimit], // Output to clamp values
        extrapolate: 'clamp', // Automatically clamp values to min/max
    });

    const panRef = useRef(panResponder).current;

    return (
        <>
            <View style={combinedStyle.container}>
                <View style={combinedStyle.track}>
                    <Animated.View
                        style={[
                            combinedStyle.thumb,
                            {
                                left: position,
                                transform: [{translateX: position_x}],
                            },
                        ]}
                        {...panRef.panHandlers}
                    />
                </View>
            </View>
        </>
    );
};

export default Slider;
