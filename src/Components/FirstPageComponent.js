import React, { Component } from 'react';
import Information from './InfoComponent/Information';
import Homepage from './HomepageComponent/Homepage';

class FirstPage extends Component {
    render() {
      return (
        <div className="FirstPageBody">
            <Homepage />
            <Information />
        </div>
      );
    }
  }
  
  export default FirstPage;