import React from 'react';

class Clock extends React.Component{
  componentDidMount() {
    this.handle = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
    this.handle = 0;
  }

  constructor() {
    super();
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
    this.handle = 0;
  }

  tick() {
    let newTime = new Date();
    this.setState({time: newTime});
  }

  render() {
    // return <h1>ClockityClock</h1>;
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    }
    if (minutes < 10) {
      minutes = "0" + minutes.toString();
    }
    let dayHalf = "am";
    if (hours > 12) {
      dayHalf = "pm";
      hours -= 12;
    }

    return (<h1 class="w3-spin"> {hours}:{minutes}:{seconds} {dayHalf} </h1>);
  }
}




export default Clock;
