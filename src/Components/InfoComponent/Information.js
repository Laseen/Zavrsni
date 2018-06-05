import React, { Component } from 'react';


class Information extends Component {
    constructor() {
        super()
        this.state = {
          carousel: [{
            thumbnailTitle:'ROS',
            thumbnail: 'C:/Users/Petar/my-app/src/Components/InfoComponent/ROSthumb.jpg',
          },{
            thumbnailTitle:'ROSBridge',
            thumbnail: 'C:/Users/Petar/my-app/src/Components/InfoComponent/Rosbridgethumb.png',
          },{
            thumbnailTitle:'React.js',
            thumbnail:'C:/Users/Petar/my-app/src/Components/InfoComponent/Reactthumb.png',
          },{
            thumbnailTitle:'Gulp.js',
            thumbnail: 'C:/Users/Petar/my-app/src/Components/InfoComponent/Gulpthumb.jpg',
          },{
            thumbnailTitle:'Sass/scss',
            thumbnail:'C:/Users/Petar/my-app/src/Components/InfoComponent/Sassthumb.jpg',
          }]
        }
      }

    render() {
        return (
        <div className="bodyInfo">
            <div className="spacer">
                <h1 className="headerMain">Additional Information </h1>
            </div>
            <div id="list-container">
            <nav>
                <ul>
                <div className="upperList">
                    <li> <a href="http://www.ros.org/">{this.state.carousel.thumbnailTitle}</a> </li>
                    <li> <a href="http://wiki.ros.org/rosbridge_suite">{this.state.carousel.thumbnailTitle}</a> </li>
                    <li> <a href="https://reactjs.org/">{this.state.carousel.thumbnailTitle}</a> </li>
                </div>
                <div className="lowerList">
                    <li> <a href="https://gulpjs.com/">{this.state.carousel.thumbnailTitle}</a> </li>
                    <li> <a href="https://sass-lang.com/">{this.state.carousel.thumbnailTitle}</a> </li>
                </div>
                </ul>
            </nav>        
            </div>
        </div>
        );
    }
}

export default Homepage;