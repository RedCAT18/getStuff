import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';

import { Card, Element, Button, Confirm } from './common';
import EventForm from './EventForm';
import { updateEvent, updatedEventSave, eventDelete } from '../actions';

class EventEdit extends Component {
  state = {
    showModal: false
  }

  componentWillMount() {
    _.each(this.props.event, (value, prop) => {
      if (prop === 'amount') {
        value = value.toString();
      }
      this.props.updateEvent({ prop, value });
    });
  }

  onButtonPress() {
    const { title, description, date, amount } = this.props;

    this.props.updatedEventSave({ title, description, date, amount, uid: this.props.event.uid });
  }

  onAccept() {
    const { uid } = this.props.event;

    this.props.eventDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <ImageBackground 
          source={require('../assets/images/bgImage.jpg')}
          style={styles.container}
      > 
      <EventForm {...this.props} />
      <Card style={styles.input}>

        {/* {this.messageRender()} */}

        <Element>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Update
          </Button>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Delete
          </Button>
        </Element>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Do you really want to cancel this event? 
        </Confirm>
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
  updatedEventSave,
  eventDelete
})(EventEdit);