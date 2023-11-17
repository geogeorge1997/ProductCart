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
  onPress: () => void;
}

// istanbul ignore next
const Button: React.FC<AnswerBoxProps> = ({
  disabled = false,
  backgroundColor,
  textColor,
  text,
  onPress,
}) => {
  return (
    <PaperButton
      disabled={disabled}
      mode="contained"
      textColor={textColor}
      labelStyle={{fontSize: 18}}
      style={{
        ...styles.buttonStyle,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
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
    ...STYLES.BORDER_STYLE,
    ...STYLES.FLEX_ROW_CENTER,
    // minWidth: CONSTANTS.HEIGHT_WIDTH.Pix50
  },
});

export default Button;

/* <Text
        variant="titleLarge"
        style={{ color: colors?.ELEVATION_TEXT }}
        text={text}
      /> */
