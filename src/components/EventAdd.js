import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { Card, Element, Input, Button } from './common';
import { updateEvent, createEvent } from '../actions';

class EventAdd extends Component {

  onButtonPress() {
    const { title, description, date, amount } = this.props;
    this.props.createEvent({ title, description, date, amount });
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
      <Card style={styles.input}>
        <Element>
          <Input 
            label="Title"
            value={this.props.title}
            placeholder="Enter Title"
            onChangeText={value => this.props.updateEvent({ prop: 'title', value })}
          />
        </Element>
        <Element>
          <Input 
            label="Description"
            multiline
            value={this.props.description}
            placeholder="About the Event"
            onChangeText={value => this.props.updateEvent({ prop: 'description', value })}
          />
        </Element>
        <Element>
          <Input 
            label="Amount" 
            value={this.props.amount}
            placeholder="How many people can attend?"
            onChangeText={value => this.props.updateEvent({ prop: 'amount', value })}
          />
        </Element>
        <Element>
          <DatePicker
            style={styles.dateSet}
            value={this.props.date}
            placeholder={this.props.date}
            placeholdercolor={'#888'}
            onDateChange={value => this.props.updateEvent({ prop: 'date', value })}
          />
        </Element>

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
  dateSet: {
    flex: 1,
    alignItems: 'center',
  },
  message: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  }
});

const mapStateToProps = (state) => {
  const { title, description, date, amount, available, message } = state.event;
  return { title, description, date, amount, available, message };
};

export default connect(mapStateToProps, { 
  updateEvent, 
  createEvent 
})(EventAdd);