import React, { Component } from 'react';
import ROSLIB from 'roslib';

type Props = {
}

type State = {
  connected: boolean,
  error: ?React.Element<*>,
  url: string,
}

class RosComponent extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            connected: false,
            error: undefined,
            url: "ws://localhost:9090",
        }
    };

    handleChange = (event: {target: {value: string}}) => {
        this.setState({url: event.target.value});
    }

    handleConnect = () => {
        try {
            this.ros = new ROSLIB.Ros({url : this.state.url,});
    
            if (this.ros) {
                this.ros.on('connection', () => {
                    this.setState({connected:
                        <div>
                            <div style={{color: "blue", margin: 5}}>
                                <div>Established connection to rosbridge server</div>
                            </div>
                            <div className="arrowContainer">
                                <div className="arrowBox">
                                    <i className="fa fa-arrow-circle-up" id="arrowRosUp" aria-hidden="true" onClick={() => this.move('up')}></i>
                                    <i className="fa fa-arrow-circle-down" id="arrowRosDown" aria-hidden="true" onClick={() => this.move('down')}></i>
                                    <i className="fa fa-arrow-circle-left" id="arrowRosLeft" aria-hidden="true" onClick={() => this.move('left')}></i>
                                    <i className="fa fa-arrow-circle-right" id="arrowRosRight" aria-hidden="true" onClick={() => this.move('right')}></i>
                                </div>
                            </div>
                        </div>,
                        error: null
                    });
                });
            }
        
            if (this.ros) {
                this.ros.on('error', (error) => {
                    console.log(error);
                    this.setState({
                        error: (
                        <div style={{color: "rgb(161, 55, 55)", margin: 5}}>
                            <div>Unable to establish connection to rosbridge server</div>
                        </div>),
                        connected: null
                    });
                });
            }
        }

        catch (e) {
            console.log("Failed to create ros instance", e)
            this.setState({
                error: (
                <div style={{color: "rgb(161, 55, 55)", margin: 5}}>
                    <div>{e.message}</div>
                </div>),
                connected: null
            });
        }
    }

    move = (command) => {
        var cmdVel = new ROSLIB.Topic({
            ros: this.ros,
            name : 'turtle1/cmd_vel',
            messageType : 'geometry_msgs/Twist'
        });
        var twist;
        if (command === 'up'){
            twist = new ROSLIB.Message({
                linear : {
                    x : 2.0,
                    y : 0.0,
                    z : 0.0
                  },
                  angular : {
                    x : 0.0,
                    y : 0.0,
                    z : 0.0
                  }
            });
        }
        else if (command === 'down'){
            twist = new ROSLIB.Message({
                linear : {
                    x : -2.0,
                    y : 0.0,
                    z : 0.0
                },
                angular : {
                    x : 0.0,
                    y : 0.0,
                    z : 0.0
                }
            });
        }
        else if (command === 'left'){
            twist = new ROSLIB.Message({
                linear : {
                    x : 0.0,
                    y : 0.0,
                    z : 0.0
                },
                angular : {
                    x : 0.0,
                    y : 0.0,
                    z : 2.0
                }
            });
        }
        else {
            twist = new ROSLIB.Message({
                linear : {
                    x : 0.0,
                    y : 0.0,
                    z : 0.0
                },
                angular : {
                    x : 0.0,
                    y : 0.0,
                    z : -2.0
                }
            });
        }
        cmdVel.publish(twist);
    }

    render() {
        return (
        <div className="rosContainer">
            <div className="spacer">
                <h1 className="headerMain">RosBridge-Turtlebot</h1>
            </div>
            <div className="urlConnect">
                <p>Connect to url</p>
                <input type="url" name="url" value={this.state.url} onChange={this.handleChange} disabled={this.state.connected}/>
                <button onClick={this.handleConnect} value="Connect" hidden={this.state.connected}>Connect</button>
                {this.state.error}
                {this.state.connected}
            </div>    
        </div>
        )
    }
}

export default RosComponent;