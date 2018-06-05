import React, { Component } from 'react';
import logoreact from './logo.svg';
import logofesb from './fesb.jpg'

class Footer extends Component {
  render() {
    return (
        <footer>
          <div className="center">
            <a href="https://www.reactjs.org/"> <img src={logoreact} className="logoreact" alt="logoreact"/> </a>
          </div>

          <div className="right">
            <a className="naslov">About:</a>
            <ul>
              <li className="listFooter"> <a href="http://www.ros.org/">ROS</a> </li>
              <li className="listFooter"> <a href="https://github.com/RobotWebTools/rosbridge_suite/tree/develop/rosapi">ROS-bridge</a> </li>
              <li className="listFooter"> <a href="https://reactjs.org/">React.js</a> </li>
            </ul>
          </div>

          <div className="left">
            <a href="https://www.fesb.unist.hr/"> <img src={logofesb} className="logofesb" alt="logofesb"/> </a>
          </div>

          <div className="CR">
            <p>Copyright Antonio Miličić @FESB 2018</p>
          </div>
        </footer>
    );
  }
}

export default Footer;