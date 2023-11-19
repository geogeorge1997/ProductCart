import React from 'react';
import {StyleSheet} from 'react-native';
// https://callstack.github.io/react-native-paper/button.html
import {Button as PaperButton} from 'react-native-paper';

// import Text from '../Text'

import * as STYLES from '../../utils/styles';
// import * as CONSTANTS from '../../utils/contants';

export interface AnswerBoxProps {
  disabled: boolean | undefined;
  backgroundColor: string;
  textColor: string;
  text: string;
  style: any;
  onPress: () => void;
}

// istanbul ignore next
const Button: React.FC<AnswerBoxProps> = ({
  disabled = false,
  backgroundColor,
  textColor,
  text,
  style,
  onPress,
}) => {
  return (
    <PaperButton
      disabled={disabled}
      mode="contained"
      textColor={textColor}
      style={{
        ...styles.buttonStyle,
        backgroundColor: backgroundColor,
        ...style,
      }}
      onPress={() => {
        onPress();
      }}>
      {text}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    ...STYLES.FLEX_ROW_CENTER,
  },
});

export default Button;

/* <Text
        variant="titleLarge"
        style={{ color: colors?.ELEVATION_TEXT }}
        text={text}
      /> */
