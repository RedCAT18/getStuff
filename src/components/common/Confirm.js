import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { Element } from './Element';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    > 
      <View style={styles.container}>
        <Element style={styles.element}>
          <Text style={styles.text}>{children}</Text>
        </Element>
        <Element style={styles.element}>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </Element>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 40,
    color: '#000'
  },
  element: {
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});

export { Confirm };