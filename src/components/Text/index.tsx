import React from 'react';
// https://callstack.github.io/react-native-paper/text.html
import {Text as PaperText} from 'react-native-paper';

export interface TextProps {
  variant: string;
  style: any;
  text: string | undefined;
  numberOfLines: number | undefined;
}

const Text: React.FC<TextProps> = ({variant, style, text, numberOfLines}) => {
  return (
    <PaperText
      variant={variant}
      style={{...style}}
      numberOfLines={numberOfLines}>
      {text}
    </PaperText>
    // <PaperText style={{ ...style, flexShrink: 1 }} numberOfLines={}>{text}</PaperText>
  );
};

export default Text;
