import React from 'react';
import { View, StyleSheet } from 'react-native';

const Element = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-start',
    padding: 5,
  }
});

export { Element };