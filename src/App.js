import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Clock from './Clock';
import 'babel-polyfill';


class App extends Component {

    tick(){
        const now = moment().format('X');
        this.setState({now});
        this.setState({timeout: setTimeout(this.tick, 100)});
    }

    constructor(){
        super();
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.tick();
    };


    state = {
      now: null
    }

  render() {

    const hackStart = moment('2017-08-09 15:30').format('X');
    const hackEnd = moment('2017-08-11 15:00').format('X');
    const now = moment().format('X');
    const hasStarted = hackStart < now;
    console.log("WOW");
    return (
      <div className={`center ${hasStarted && 'dark'}`}>
        <div className={`container`}>
          <div className="row">
            <div className="col-xs-3"/>
            <div className="col-xs-6 logo"/>
          </div>
          <div className="row text-center big">
            <div className="col-xs-12">Hackathon 2017</div> 
          </div>
          <div className="row">
          <Clock timestamp={hasStarted ? hackEnd : hackStart}/>        
          </div>
          <div className="row text-center big">
            {hasStarted ? 'Hack ends' : 'Kickoff'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
