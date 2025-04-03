type SliderProps = {
    style?: {
        sliderContainer: {},
        track: {
            width: number;
        },
        thumb: {
            borderRadius: number;
        },
        input: {}
    };
    maxCharacters: number;
    minCharacters: number;
    onRelease: (val: number) => void;
}

export default SliderProps;
