import React, { Component } from 'react';
import logoros from './logoheader.png';


class Header extends Component {
  render() {
    return (
      <header className="headerContainer">
        <a href="http://www.ros.org/" target="_blank" rel="noopener noreferrer"> <img src={logoros} className="logoros" alt="logoros"/> </a>
        <nav>
            <ul>
              <li> <a href="#">Home</a> </li>
              <li> <a href="#">Demo</a> </li>
            </ul>
        </nav>        
      </header>
    );
  }
}

export default Header;
