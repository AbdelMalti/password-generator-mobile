import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
    title: {
        fontSize: 24,         // Large size for emphasis
        fontWeight: 'bold',   // Make it bold
        textAlign:'center',  // Center align for titles
        marginBottom: 10,     // Space below title
        color: '#333',        // Dark color for readability
    },
    background: {
        flex: 1,                // Take up full screen
        backgroundColor: '#9bd49b', // Light gray background
        justifyContent: 'center', // Center content
        alignItems: 'center',     // Align items in center
    },
    button: {
        backgroundColor: '#469446',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    sliderContainer: {
        margin: 10,
        flex: 2,
        flexDirection: 'row', // Aligns children in a row (horizontally)
        gap: 30,
        justifyContent: 'center',     // Align items in center
    },
    checkboxContainer: {
        margin: 10,
        flex: 1,
        flexDirection: 'column', // Aligns children in a row (horizontally)
        // gap: 50,
        justifyContent: 'space-evenly',     // Align items in center
        alignItems: 'flex-start',     // Align items in center
    },
    checkboxElement: {
        flexDirection: 'row', // Aligns children in a row (horizontally)
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: '#156e15',
        borderRadius: 5,
    },
    checkmark: {
        fontSize: 20,
    },
    track: {
        width: 250,
        height: 10,
        backgroundColor: '#469446',
        borderRadius: 15,
        position: 'relative',
    },
    thumb: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        position: 'relative',
        top: -5,
    },
    input: {
        height: 20,
        borderColor: '#333',
        borderWidth: 0,
        position: 'relative',
        fontSize: 18,
        top: -2,
    },
});

export default appStyles;
