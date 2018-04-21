import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { Card, Element, Button } from './common';
import { updateEvent, createEvent } from '../actions';

import EventForm from './EventForm';

class EventAdd extends Component {

  onButtonPress() {
    const { title, description, date, member, amount, available } = this.props;
    this.props.createEvent({ title, description, date, member, amount, available });
  }

  messageRender() {
    if (this.props.message) {
      return (
        <View>
          <Text style={styles.message}>{this.props.message}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <ImageBackground 
          source={require('../assets/images/bgImage.jpg')}
          style={styles.container}
      > 
      <EventForm {...this.props} />
      <Card style={styles.input}>

        {this.messageRender()}

        <Element>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Add
          </Button>
        </Element>
      </Card>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    marginTop: 40,
    justifyContent: 'center',
  },
  message: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  }
});

const mapStateToProps = (state) => {
  const { title, description, date, amount, member, available, message } = state.event;
  return { title, description, date, amount, member, available, message };
};

export default connect(mapStateToProps, { 
  updateEvent, 
  createEvent 
})(EventAdd);