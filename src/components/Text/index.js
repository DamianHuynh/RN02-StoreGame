import React from 'react';
import {Text as TextRN, StyleSheet} from 'react-native';
import globalStyle from '../../theme/globalStyle';

const Text = ({children, h2, style, light, ...props}) => {
  return (
    <TextRN
      style={[
        styles.defaultStyle,
        h2 && styles.h2,
        light && styles.light,
        style,
      ]}
      {...props}>
      {children}
    </TextRN>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    color: '#fff',
  },
  h2: {
    ...globalStyle.h2,
    ...globalStyle.fontW700,
  },
  light: {
    fontWeight: '300',
  },
});

export default Text;
