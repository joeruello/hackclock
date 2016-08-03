import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Clock from './Clock';
import 'babel-polyfill';


class App extends Component {
  render() {

    const hackStart = moment('2016-08-03 16:30').format('X');
    const hackEnd = moment('2016-08-05 13:30').format('X');
    const now = moment();
    const hasStarted = hackStart < now;

    return (
      <div className="center">
      <div className="container">
        <div className="row">
          <div className="col-xs-3"/>
          <div className="col-xs-6 logo"/>
        </div>
        <div className="row text-center big">
          <div className="col-xs-12">Hackathon 2016</div> 
        </div>
        <div className="row">
        <Clock timestamp={hasStarted ? hackStart : hackEnd}/>        
        </div>
        <div className="row text-center big">
          {hasStarted ? 'Pitches and Kickoff' : 'Hack ends'}
        </div>
      </div>
      </div>
    );
  }
}

export default App;
