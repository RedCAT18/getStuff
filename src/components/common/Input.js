import React from 'react';
import { TextInput, Keyboard, View, Text, StyleSheet } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, multiline, returnKeyType }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid={'transparent'}
        autoCorrect={false}
        placeholderTextColor={'#49757b'}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        multiline={multiline}
        onBlue={() => Keyboard.dismiss()}
      />
    </View>
  );
};  

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    paddingLeft: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 14,
    lineHeight: 23,
    flex: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  }
});

export { Input };

