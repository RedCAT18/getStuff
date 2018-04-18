import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native'; 
import { Actions } from 'react-native-router-flux'; 
import firebase from 'firebase';
import { Card, Element, Button } from './common';

class ListItem extends Component {


  onButtonPress() {
    Actions.eventEdit({ event: this.props.event });
  }

  render() {
    const { currentUser } = firebase.auth();
    const { title, description, date, amount, user } = this.props.event;

    return (
      <Card>
        <Element>
          <View style={styles.outbox}>
            { currentUser.uid === user ? (
                <Text 
                  style={styles.edit}
                  onPress={this.onButtonPress.bind(this)}
                >Edit</Text>
              ) : (null) }
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{description}</Text>
            <Text style={styles.date}>Due date : {date}</Text>
            <Text style={styles.amount}>Available Seat: {amount}</Text>
            <Button>Reservation</Button>
          </View>
        </Element>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  outbox: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#1f4e5e',
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#1e495a',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      }
    }),
  },
  edit: {
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'flex-end',
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    margin: 5,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: '600',
  },
  desc: {
    paddingLeft: 20,
    fontSize: 12,
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    paddingLeft: 20,
    marginBottom: 10,
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-end',
    paddingRight: 20,
  }
});

export default ListItem;