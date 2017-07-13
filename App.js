import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAJXXw4s13Wn77dt3tOAr71YgeqiWhueIU',
      authDomain: 'manager-454bf.firebaseapp.com',
      databaseURL: 'https://manager-454bf.firebaseio.com',
      projectId: 'manager-454bf',
      storageBucket: '',
      messagingSenderId: '153240119808',
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

