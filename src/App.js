import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repeater: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" value={this.state.repeater} onChange = {(e) =>  this.setState({repeater: e.target.value})}/>
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }
}

export default App;
