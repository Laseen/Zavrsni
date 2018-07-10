import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import FirstPage from './Components/FirstPageComponent';
import RosComponent from './Components/RosComponent/RosComponent';
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <BrowserRouter>
          <div>
            <Route path="/home" component={FirstPage} />
            <Route path="/RosTurtle" component={RosComponent}/>
          </div>
        </BrowserRouter>
        <Footer/>

      </div>
    );
  }
}

export default App;
