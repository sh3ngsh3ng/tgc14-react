import React from 'react'

export default class SurveyForm extends React.Component {
    state = {
        "name": "",
        "colour":"red",
        "country":"my"
    }

    render() {
        return(
            <React.Fragment>
                <div>
                     <label>Name:</label>
                     <input type="text" value={this.state.name} onChange={this.updateName}/>
                </div>
                <div>
                    <label>Favourite Color</label>
                    <input type="radio" name="color" value="red" onChange={this.updateColour} checked={this.state.colour == 'red'}/><span>Red</span>
                    <input type="radio" name="color" value="blue" onChange={this.updateColour} checked={this.state.colour == 'blue'}/><span>Blue</span>
                    <input type="radio" name="color" value="green" onChange={this.updateColour} checked={this.state.colour == 'green'}/><span>Green</span>
                </div>
                <div>
                <label>Country:</label>
                    <select onChange={this.updateCountry} value={this.state.country}>                     
                        <option value="sg">Singapore</option>
                        <option value="my">Malaysia</option>
                        <option value="in">Indonesia</option>
                    </select>
                </div>
            </React.Fragment>

        )
    }

    updateName = (evt) => {
        this.setState({
            'name': evt.target.value
        })
    }

    updateColour = (evt) => {
        this.setState({
            'colour': evt.target.value
        })
    }

    updateCountry = (evt) => {
        this.setState({
            'country': evt.target.value
        });
    }
}