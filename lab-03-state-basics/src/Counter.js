import React from "react"

// The class that is being extended from is the PARENT
// So in this case, React.Component is the parent, and Counter is the child
// which means, the Counter class will have all the variables and functions of the parent (React.Component)
export default class Counter extends React.Component {
    // state is defined in and used by React.Component 
    // two important thing:
    // 1. can only be changed and accessed by the counter class itself
    // 2. hidden from other components and JS code
    state = {
        "number": 5  // each key/value pair in the state object represents one data / piece of information
    }

    // return the JSX that forms the visuals of the component
    render() {
        return (
            <React.Fragment>
                <div>Number: {this.state.number}</div>
                <button onClick={this.changeTen}>Change to 10</button>
            </React.Fragment>
        )
    }

    changeTen = () => {
        // cannot change (i.e mutate) a state variable directly
        // this.state.number = 10;

        // we must set the setState function
        this.setState({
            "number": 10
        })

    }
}