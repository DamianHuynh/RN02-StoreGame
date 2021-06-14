import React from 'react';
import {View as ViewRN, StyleSheet} from 'react-native';

const View = ({children, row, style, ...props}) => {
  return (
    <ViewRN style={[row && styles.row, style]} {...props}>
      {children}
    </ViewRN>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default View;
