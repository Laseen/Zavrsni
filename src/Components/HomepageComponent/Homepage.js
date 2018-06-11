import React, { Component } from 'react';


class Homepage extends Component {
  constructor() {
    super()
    this.state = {
      selectedCarousel: 0,
      carousel: [{
        cssId: 'thumbnail1',
        thumbnailTitle:'What is React.js?',
        thumbnail: 'C:/Users/Petar/my-app/src/Components/Pages/React_illo_final_720x400.png',
        thumbtxt: `In computing, React (React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations. React can be used in the development of single-page applications and mobile applications. It aims primarily to provide speed, simplicity, and scalability.`
      },{
        cssId: 'thumbnail2',
        thumbnailTitle:'What is ROS?',
        thumbnail: 'C:/Users/Petar/my-app/src/Components/Pages/EUROPEAN-BUSINESS-AI-AND-ROBOTICS.jpg',
        thumbtxt: 'ROS (Robot Operating System) provides libraries and tools to help software developers create robot applications. It provides hardware abstraction, device drivers, libraries, visualizers, message-passing, package management, and more. ROS is licensed under an open source, BSD license.'
      },{
        cssId: 'thumbnail3',
        thumbnailTitle:'How are they connected?',
        thumbnail:'C:/Users/Petar/my-app/src/Components/Pages/robot_internet.jpg',
        thumbtxt:'Rosbridge provides a JSON API to ROS functionality for non-ROS programs. There are a variety of front ends that interface with rosbridge, including a WebSocket server for web browsers to interact with. Rosbridge_suite is a meta-package containing rosbridge, various front end packages for rosbridge like a WebSocket package, and helper packages.'
      }]
    }
  }

  componentDidMount() {
    var intervalId = setInterval(() => this.changeSelectedCarousel('next'), 15000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  changeSelectedCarousel(command) {
    let selectedCarousel = this.state.selectedCarousel;

    if (command === 'previous') {
      if (selectedCarousel <= 0) selectedCarousel = 2;
      else selectedCarousel--;
    }
    else if (command === 'next') {
      if (selectedCarousel < 2) selectedCarousel++;
      else selectedCarousel = 0;
    }
    
    this.setState({ selectedCarousel: selectedCarousel });
  }

  render() {
    return (
      <div className="homepageContainer">
        <div className="spacer">
            <h1 className="headerMain">ROS <b>&</b> React </h1>
        </div>
        <div id="thumbnailsContainer">
          <i className="fa fa-angle-double-left" id="arrow-left" onClick={() => this.changeSelectedCarousel('previous')} />
          <i className="fa fa-angle-double-right" id="arrow-right" onClick={() => this.changeSelectedCarousel('next')} />
          <article className="thumbnailMain" id={this.state.carousel[this.state.selectedCarousel].cssId}>
            <div className="box">
              <h3 className="headerBox">{this.state.carousel[this.state.selectedCarousel].thumbnailTitle} </h3>
                <p> {this.state.carousel[this.state.selectedCarousel].thumbtxt} </p>
            </div>
          </article>
          
        </div>
      </div>
    );
  }
}

export default Homepage;