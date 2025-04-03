import { Pressable, Text, View } from 'react-native';
import PasswordLength from './src/components/parameters/length';
import Checkbox from './src/components/custom/checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { StrictMode, useState } from 'react';
import generatePassword from './src/service/randomPassword';
import appStyles from './src/utils/styles';


function App(): React.JSX.Element {
  const [passLength, setPassLength] = useState(5);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);
  const [isUpperCharacter, setIsUpperCharacter] = useState(false);
  const [isLowerCharacter, setIsLowerCharacter] = useState(false);

  const styles = appStyles;

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
          <View style={styles.checkboxContainer}>
            <Checkbox
                style={styles}
                checked={isSpecialCharacter}
                onPress={() => setIsSpecialCharacter(!isSpecialCharacter)}
                label="Special characters"
            />
            <Checkbox
                style={styles}
                checked={isUpperCharacter}
                onPress={() => setIsUpperCharacter(!isUpperCharacter)}
                label="A-Z"
            />
            <Checkbox
                style={styles}
                checked={isLowerCharacter}
                onPress={() => setIsLowerCharacter(!isLowerCharacter)}
                label="a-z"
            />
          </View>
          <View style={styles.sliderContainer}>
            <PasswordLength
              style={styles}
              onRelease={ setPassLength }
              maxCharacters={55}
              minCharacters={5}
            />
          </View>
          <View>
            <Pressable
              onPress={ () => generatePassword(passLength, isUpperCharacter, isLowerCharacter, isSpecialCharacter) }
              style={ styles.button }
            >
              <Text style={ styles.buttonText }>Click Me</Text>
            </Pressable>
          </View>
        </SafeAreaView>
    </StrictMode>
  );
}

export default App;
