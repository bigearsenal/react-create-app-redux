import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            <p className="App-intro">
              Congratulations! Redux was implemented to your application!
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
