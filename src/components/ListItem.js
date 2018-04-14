import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';  

import { Card, Element, Button } from './common';

class ListItem extends Component {
  render() {
    return (
      <Card>
        <Element>
          <Text>Item</Text>
        </Element>
      </Card>
    );
  }
}

export default ListItem;