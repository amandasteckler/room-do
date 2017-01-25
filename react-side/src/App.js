import React, { Component } from 'react';
import './App.css';
import Signup from './components/Signup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="childrens">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
