import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  render() {
    return (
    
        <div className="divstyle">
         <div className="divstyle1"> <p>
            00
          </p>
          <p>
           :
          </p>
          <p>
            30
          </p>
          <p>
            :
          </p>
          <p>
            00
          </p></div>
          <div className="divstyle2">
          <p>
          Hour
          </p>
          
          <p>
          Minute
          </p>
         
          <p>
         Second
          </p>
          </div>

      </div>
    );
  }
}

export default Timer;
