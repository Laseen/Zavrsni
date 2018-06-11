import React, { Component } from 'react';
import ros from './ROSthumb.jpg';
import rosbridge from './Rosbridgethumb.png';
import reactjs from './Reactthumb.png';
import gulpjs from './Gulpthumb.jpg';
import sass from './Sassthumb.jpg';
import github from './octobiwan.jpg';

class Information extends Component {
    render() {
        return (
        <div className="informatioContainer">
            <div className="spacer">
                <h1 className="headerMain">Additional Information </h1>
            </div>
            <nav className="listContainer">
                <ul>
                    <li>
                        <a href="http://www.ros.org/" target="_blank" rel="noopener noreferrer">
                            <h4>ROS</h4>
                            <img src={ros} className="picture" alt="ROS" />
                        </a>
                    </li>
                    <li>
                        <a href="http://wiki.ros.org/rosbridge_suite" target="_blank" rel="noopener noreferrer">
                            <h4>ROSbridge</h4>
                            <img src={rosbridge} className="picture" alt="ROSB" />
                        </a>
                    </li>
                    <li>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            <h4>React.js</h4>
                            <img src={reactjs} className="picture" alt="React" />
                        </a>
                    </li>
                </ul>
                <ul>    
                    <li>
                        <a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">
                            <h4>Gulp.js</h4>
                            <img src={gulpjs} className="picture" alt="Gulp" />
                        </a>
                    </li>
                    <li>
                        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                            <h4>Sass</h4>
                            <img src={sass} className="picture" alt="Sass" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Laseen/Zavrsni" target="_blank" rel="noopener noreferrer">
                            <h4>GitHub</h4>
                            <img src={github} className="picture" alt="Github" />
                        </a>
                    </li>
                </ul>       
            </nav>
        </div>
        );
    }
}

export default Information;