import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import AppContainer from './src/routing';
import configureStore from './src/store';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
