import { Text, View } from "react-native";
import PasswordLength from "./src/components/parameters/length"
import {SafeAreaView} from 'react-native-safe-area-context';
import { StrictMode } from "react";


function App(): React.JSX.Element {

  return (
    <StrictMode>
        <SafeAreaView>
          <View>
            <Text>This is the password app generator</Text>
          </View>
          <PasswordLength/>
        </SafeAreaView>
    </StrictMode>
  );
}

export default App;
