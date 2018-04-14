import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Router from './Router';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCu9BKMGOxOR5KA_QADXq7ePjvPcHmHUNc',
      authDomain: 'getstuff-7e2b7.firebaseapp.com',
      databaseURL: 'https://getstuff-7e2b7.firebaseio.com',
      projectId: 'getstuff-7e2b7',
      storageBucket: 'getstuff-7e2b7.appspot.com',
      messagingSenderId: '664381715103'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;