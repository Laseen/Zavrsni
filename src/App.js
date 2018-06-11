import React, { Component } from 'react';
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import Homepage from './Components/HomepageComponent/Homepage'
import Information from './Components/InfoComponent/Information';
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Homepage />

        <Information />

        <Footer />

      </div>
    );
  }
}

export default App;
