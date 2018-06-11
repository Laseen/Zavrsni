import React, { Component } from 'react';
import logoreact from './logo.svg';
import logofesb from './fesb.jpg'

class Footer extends Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="centerContainer">
          <a href="https://www.reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={logoreact} className="logoreact" alt="logoreact"/> </a>
        </div>
        <div className="rightContainer">
          <a className="naslov">About:</a>
          <ul>
            <li className="listFooter"> <a href="http://www.ros.org/" target="_blank" rel="noopener noreferrer">ROS</a> </li>
            <li className="listFooter"> <a href="https://github.com/RobotWebTools/rosbridge_suite/tree/develop/rosapi" target="_blank" rel="noopener noreferrer">ROS-bridge</a> </li>
            <li className="listFooter"> <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a> </li>
          </ul>
        </div>
        <div className="leftContainer">
          <a href="https://www.fesb.unist.hr/" target="_blank" rel="noopener noreferrer"> <img src={logofesb} className="logofesb" alt="logofesb"/> </a>
        </div>
        <div className="CR">
          <p>Copyright Antonio Miličić @FESB 2018</p>
        </div>
      </footer>
    );
  }
}

export default Footer;