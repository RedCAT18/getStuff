import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.card, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    ...Platform.select({
      ios: {
        shadowColor: '#1e495a',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      }
    }),
    margin: 5,
  }
});

export { Card };