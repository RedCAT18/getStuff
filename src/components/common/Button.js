import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress}
      
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}; 

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 5,
    backgroundColor: '#1f4e5e',
    borderRadius: 5,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  buttonText: {
    padding: 5,
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    alignSelf: 'center',
  }
});

export { Button };