import React from 'react'
import LightBulbOn from "./light-bulb-on.jpg"
import LightBulbOff from "./light-bulb-off.jpg"

// will demonstrate using functions for conditional rendering
export default class LightBulb3 extends React.Component {
    state = {
        light: false
    }
    render() {

        // using variables to store JSX
        return (
            <React.Fragment>
                <div>
                    {this.state.light ? <img src={LightBulbOn} /> : <img src={LightBulbOff} />}
                </div>
                { this.state.light ? <p>Light is on</p> : null}
                <button onClick={this.switchOn}>On</button>
                <button onClick={this.switchOff}>Off</button>
            </React.Fragment>
        )
    }

    switchOn = () => {
        this.setState({
            'light': true
        })
    }

    switchOff = () => {
        this.setState({
            'light': false
        })
    }
}