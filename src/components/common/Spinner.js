import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size} 
        style={styles.spinner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignSelf: 'stretch',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  }
});

export { Spinner };