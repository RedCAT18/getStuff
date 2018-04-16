import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native'; 
import { Actions } from 'react-native-router-flux'; 
import { Card, Element, Button } from './common';

class ListItem extends Component {
  render() {
    const { title, description, date, amount } = this.props.event;

    return (
      <Card>
        <Element>
          <Text>{title}</Text>
          <Text>{description}</Text>
          <Text>{date}</Text>
          <Text>{amount}</Text>
        </Element>
      </Card>
    );
  }
}

export default ListItem;