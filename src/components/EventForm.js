import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { View, StyleSheet } from 'react-native';
import { Element, Input } from './common';
import { updateEvent, createEvent } from '../actions';

class EventForm extends Component {
  render() {
    return (
      <View>
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
            customStyles={{placeholderText: {color: '#000'}}}
            onDateChange={value => this.props.updateEvent({ prop: 'date', value })}
          />
        </Element>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateSet: {
    flex: 1,
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  const { title, description, date, amount, available, message } = state.event;
  return { title, description, date, amount, available, message };
};

export default connect(mapStateToProps, { 
  updateEvent, 
  createEvent 
})(EventForm);