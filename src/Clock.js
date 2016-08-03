import React, {Component} from 'react';
import moment from 'moment';

const SECONDS_PER_DAY = 86400;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;
 
const HOURS_PER_DAY = 24;
const MINS_PER_HOUR = 60;

const pad = (number) => String(number).padStart(2, '0');

export default class Clock extends Component {

    state = {
        timeout: null,
        now: moment().format('X')
    };

    constructor(){
        super();
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.tick();
    };

    tick(){
        const now = moment().format('X');
        this.setState({now});
        this.setState({timeout: setTimeout(this.tick, 300)});
    }

    render(){
        const {timestamp} = this.props;
        const {now} = this.state;
        let remaining = Math.max(0,timestamp - now);


        const days = Math.floor(remaining / SECONDS_PER_DAY);
        remaining = remaining - days * SECONDS_PER_DAY;

        const hours = Math.floor(remaining / SECONDS_PER_HOUR) % HOURS_PER_DAY
        remaining = remaining - hours * SECONDS_PER_HOUR;        

        const minutes = Math.floor(remaining / SECONDS_PER_MIN) % MINS_PER_HOUR
        remaining = remaining - minutes * SECONDS_PER_MIN;  
        
        const seconds = Math.floor(remaining % SECONDS_PER_MIN);

        return <div className="row text-center clock">
            {days} - {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </div>
    }

};
