import React from 'react'
import LightBulbOn from "./light-bulb-on.jpg"
import LightBulbOff from "./light-bulb-off.jpg"

export default class LightBulb extends React.Component {
    state = {
        light: false
    }

    render() {

        let lightBulb = null; // assign nothing
        if (this.state.light == true) {
            lightBulb = <img src={LightBulbOn}/>
        } else {
            lightBulb = <img src={LightBulbOff}/>
        }

        // using variables to store JSX
        return (
            <React.Fragment>
                <div>
                    {lightBulb}
                </div>
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