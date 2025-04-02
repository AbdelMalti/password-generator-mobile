import { StyleSheet, Text, View } from 'react-native';
import PasswordLength from './src/components/parameters/length';
import Checkbox from './src/components/custom/checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { StrictMode, useState } from 'react';


function App(): React.JSX.Element {
  const [passLength, setPassLength] = useState(5);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);
  const [isUpperCharacter, setIsUpperCharacter] = useState(false);
  const [isLowerCharacter, setIsLowerCharacter] = useState(false);

  console.log(`
    passLength = ${passLength}
    isSpecialCharacter = ${isSpecialCharacter}
    isUpperCharacter = ${isUpperCharacter}
    isLowerCharacter = ${isLowerCharacter}
  `);

  return (
    <StrictMode>
        <SafeAreaView style={styles.background}>
          <View>
            <Text style={styles.title}>This is the password app generator</Text>
          </View>
          <PasswordLength
            onRelease={ setPassLength }
            maxCharacters={55}
            minCharacters={5}
          />
          <Checkbox
              checked={isSpecialCharacter}
              onPress={() => setIsSpecialCharacter(!isSpecialCharacter)}
              label="Special characters"
          />
          <Checkbox
              checked={isUpperCharacter}
              onPress={() => setIsUpperCharacter(!isUpperCharacter)}
              label="A-Z"
          />
          <Checkbox
              checked={isLowerCharacter}
              onPress={() => setIsLowerCharacter(!isLowerCharacter)}
              label="a-z"
          />
        </SafeAreaView>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  title: {
      fontSize: 24,         // Large size for emphasis
      fontWeight: 'bold',   // Make it bold
      textAlign:'center',  // Center align for titles
      marginBottom: 10,     // Space below title
      color: '#333',        // Dark color for readability
  },
  background: {
    flex: 1,                // Take up full screen
      backgroundColor: '#2596be', // Light gray background
      justifyContent: 'center', // Center content
      alignItems: 'center',     // Align items in center
  },
});

export default App;
