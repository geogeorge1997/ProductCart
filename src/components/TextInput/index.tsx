import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

// https://callstack.github.io/react-native-paper/text-input.html
import {TextInput as PaperTextInput} from 'react-native-paper';

// import Text from '../Text';

// import * as STYLES from '../../utils/styles';
// import * as CONSTANTS from '../../utils/contants';

// number of lines in TextInput

interface TextInputProps {
  colors: any;
  keyboardType: boolean;
  multiline: boolean;
  maxLength: number;
  placeholder: string;
  value: string;
  editable: boolean;
  style: any;
  setTextInput: (newText: string) => void;
}

// istanbul ignore next
const TextInput: React.FC<TextInputProps> = ({
  colors,
  keyboardType,
  multiline,
  maxLength,
  placeholder,
  value,
  editable,
  style,
  setTextInput,
}) => {
  const [myText, setMyText] = useState<string>('');
  return (
    <View style={styles.container}>
      <PaperTextInput
        keyboardType={keyboardType ? 'numeric' : undefined}
        autoCorrect={false}
        autoComplete="off"
        textColor={colors?.PRIMARY_TEXT}
        placeholderTextColor={colors?.GREY}
        underlineColor={colors?.TRANSPARENT}
        multiline={multiline}
        maxLength={maxLength}
        style={style}
        mode="flat"
        placeholder={placeholder}
        value={myText || value}
        editable={editable}
        onChangeText={newText => {
          setTextInput(newText);
          setMyText(newText);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Max-Width
  },
});

export default TextInput;