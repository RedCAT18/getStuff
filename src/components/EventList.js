import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { eventFetch } from '../actions';
import { ListView, ImageBackground, StyleSheet } from 'react-native';

import ListItem from './ListItem';

class EventList extends Component {
  componentWillMount() {
    // console.log(this.props);
    //{ '-LA2zI8e6jJNAivX5b2f': 
    //   { amount: 8,
    //     date: '2018-04-18',
    //     description: 'test123',
    //     title: 'test' },
    //  '-LA2zgdNwoqmuPBUWb4y': 
    //   { amount: 6,
    //     date: '2018-04-16',
    //     description: 'asdfg',
    //     title: 'test2' } }
    this.props.eventFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ events }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    console.log(ds);
    this.dataSource = ds.cloneWithRows(events);
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

const mapStateToProps = (state) => {
  const events = _.map(state.fetchEvent, (val, uid) => {
    return { ...val, uid };
  });
  // console.log(events);
  return { events };
};

export default connect(mapStateToProps, { eventFetch })(EventList);