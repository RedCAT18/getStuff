import React, { Component } from 'react';
import { Modal, Text, View, ListView, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { eventFetch, closeModal } from '../actions';

import { Button } from './common';
import ListItem from './ListItem';

class EventList extends Component {
  componentWillMount() {    
    this.props.eventFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onPressButton() {
    this.props.closeModal();
  }

  createDataSource({ events }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(events);
  }
  
  renderModal() {
    if (this.props.message) {
      return (
        <Modal
          
          animationType='fade'
          visible={this.props.message}
          onRequestClose={() => {}}
          transparent
        > 
          <View style={styles.modal}>
            <Text style={styles.message}>{this.props.message}</Text>
            <Button
              onPress={this.onPressButton.bind(this)}
            > OK
            </Button>
          </View>
        </Modal>
      );
    }
  }

  renderRow(event) {
    return <ListItem event={event} />;
  }

  render() {
    return (
      <ImageBackground 
          source={require('../assets/images/bgImage.jpg')}
          style={styles.container}
      > 
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />

        {this.renderModal()}

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    // justifyContent: 'center',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 40,
    color: '#fff',
  },
});

const mapStateToProps = (state) => {
  const events = _.map(state.fetchEvent, (val, uid) => {
    return { ...val, uid };
  });
  const { message } = state.reservation;

  return { events, message };
};

export default connect(mapStateToProps, { 
  eventFetch, 
  closeModal 
})(EventList);