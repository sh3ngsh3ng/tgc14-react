import React from "react"

export default class Counter extends React.Component {
    // state is predefined by React.Component
    // must be named 'state'
    state = {
        "number": 0
    }

    // render() is a requirement defined by React.Component
    render() {
        return (<React.Fragment>
            <div class="counter">
                {this.state.number}
            </div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </React.Fragment>)
    }

    componentDidUpdate() {
        console.log("state has been changed")
    }

    increment = () =>{
        // update the number key in the state
        this.setState({
            'number': this.state.number + 1
        })
    }

    decrement = () => {
        this.setState({
            'number': this.state.number - 1
        })
    }
}