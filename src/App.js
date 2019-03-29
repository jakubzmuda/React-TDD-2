import React, { Component } from 'react';
import Activities from './components/Activities';
import { Provider } from 'react-redux';
import setupStore from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}><Activities /></Provider>
    );
  }
}

const store = setupStore();

export default App;
