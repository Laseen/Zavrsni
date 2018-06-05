import React, { Component } from 'react';
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import Homepage from './Components/HomepageComponent/Homepage';
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Homepage />

        <Footer />

      </div>
    );
  }
}

export default App;
