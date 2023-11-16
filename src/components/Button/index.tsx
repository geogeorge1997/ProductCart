import React from 'react';
import {StyleSheet} from 'react-native';
// https://callstack.github.io/react-native-paper/button.html
import {Button as PaperButton} from 'react-native-paper';

// import Text from '../Text'

import * as STYLES from '../../utils/styles';
// import * as CONSTANTS from '../../utils/contants';

export interface AnswerBoxProps {
  disabled: boolean | undefined;
  colors: any;
  text: string;
  onPress: () => void;
}

// istanbul ignore next
const Button: React.FC<AnswerBoxProps> = ({
  disabled = false,
  colors,
  text,
  onPress,
}) => {
  return (
    <PaperButton
      disabled={disabled}
      mode="contained-tonal"
      textColor={colors?.ELEVATION_TEXT}
      labelStyle={{fontSize: 18, width: `80%`}}
      style={{
        ...styles.buttonStyle,
        backgroundColor: 'red',
        borderColor: 'black',
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
    width: '50%',
    // minWidth: CONSTANTS.HEIGHT_WIDTH.Pix50
  },
});

export default Button;

/* <Text
        variant="titleLarge"
        style={{ color: colors?.ELEVATION_TEXT }}
        text={text}
      /> */
