import { Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const generatePassword = (
    length: number,
    useUppercase: boolean,
    useLowercase: boolean,
    useSpecialChars: boolean
  ): void => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
    const numbers = '0123456789';

    let characterPool = numbers; // Always include numbers

    if (useUppercase) {characterPool += uppercaseChars;}
    if (useLowercase) {characterPool += lowercaseChars;}
    if (useSpecialChars) {characterPool += specialChars;}

    if (!characterPool) {
      throw new Error('At least one character type must be selected');
    }

    let password = '';
    // Ensure at least one number is included
    password += numbers[Math.floor(Math.random() * numbers.length)];

    // Add remaining characters randomly
    characterPool += numbers; // Include numbers in the pool for the rest of the password
    for (let i = 1; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    // Shuffle the password to avoid predictable first character placement
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    Alert.alert(`${password}`);

    Clipboard.setString(password);

    // return password;
  };

export default generatePassword;
