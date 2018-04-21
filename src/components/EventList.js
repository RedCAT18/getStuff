import React, { Component } from 'react';
import { ListView, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { eventFetch } from '../actions';


import ListItem from './ListItem';

class EventList extends Component {
  componentWillMount() {    
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