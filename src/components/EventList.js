import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import ListItem from './ListItem';

class EventList extends Component {
  render() {
    return (
      <ImageBackground 
          source={require('../assets/images/bgImage.jpg')}
          style={styles.container}
      > 
        <ListItem />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
export default EventList;