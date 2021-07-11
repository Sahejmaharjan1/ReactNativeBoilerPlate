import React from 'react';
import {Platform, StyleSheet, Text, TextProps} from 'react-native';

type DefaultTextProps = {
  textType?: 'regular' | 'bold' | 'light';
};
export const DefaultText: React.FC<TextProps & DefaultTextProps> = ({
  ...props
}) => {
  let textStyle: {};
  switch (props.textType) {
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    case 'light':
      textStyle = styles.light;
      break;
    default:
      textStyle = styles.regular;
      break;
  }
  return (
    <Text {...props} style={[textStyle, props?.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'BalooPaaji2-Bold',
  },
  regular: {
    fontFamily: 'systemfont',
  },
  bold: {
    fontFamily: 'systemfont',
  },
  light: {
    fontFamily: 'systemfont',
  },
});
