import React, { Component } from 'react';
import logoros from './logoheader.png';


class Header extends Component {
  render() {
    return (
      <header>
        <a href="http://www.ros.org/"> <img src={logoros} className="logoros" alt="logoros"/> </a>
        <nav>
            <ul>
                <li> <a href="#">Home</a> </li>
                <li> <a href="#">Info</a> </li>
                <li> <a href="#">Demo</a> </li>
                <li> <a href="#">Tools</a> </li>
            </ul>
        </nav>        
      </header>
    );
  }
}

export default Header;
