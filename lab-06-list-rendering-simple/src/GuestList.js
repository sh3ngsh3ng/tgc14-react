import React from 'react'
export default class GuestList extends React.Component {
    state = {
        'guests':["Tony Stark", "Bruce Banners", "Steve Rogers", "Peter Parkers"]
    }

    // method 2: define a function
    renderGuests() {
        let guestJSX = [];
        for (let g of this.state.guests) {
             guestJSX.push(<div>{g}</div>)
        }
        return guestJSX;
    }

    renderGuestsV2() {
        return this.state.guests.map(function(item){
            return <li>{item}</li>
        })
    }

    render() {
 
        // method 1: create an array of JSX elements
        let guestJSX = [];
        for(let g of this.state.guests) {
            guestJSX.push(<li><span>{g}</span></li>)
        }

        return (
            <React.Fragment>     
                <h1>Method 1</h1>
                <ul>
                    {guestJSX}
                </ul>
                <h1>Method 2</h1>
                {this.renderGuests()}
                <h1>Method 3</h1>
                <ul>
                {this.state.guests.map(function(item){
                    return <li>{item}</li>
                })}
                </ul>
            </React.Fragment>

        )
    }
}