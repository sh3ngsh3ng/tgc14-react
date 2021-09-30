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
                     <input type="text" name="name" value={this.state.name} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Favourite Color</label>
                    <input type="radio" name="colour" value="red" onChange={this.updateFormField} checked={this.state.colour == 'red'}/><span>Red</span>
                    <input type="radio" name="colour" value="blue" onChange={this.updateFormField} checked={this.state.colour == 'blue'}/><span>Blue</span>
                    <input type="radio" name="colour" value="green" onChange={this.updateFormField} checked={this.state.colour == 'green'}/><span>Green</span>
                </div>
                <div>
                <label>Country:</label>
                    <select onChange={this.updateCountry} value={this.state.country} name="country">                     
                        <option value="sg">Singapore</option>
                        <option value="my">Malaysia</option>
                        <option value="in">Indonesia</option>
                    </select>
                </div>
            </React.Fragment>

        )
    }

    updateFormField = (evt) => {
        console.log("evt.target.name =>", evt.target.name);
        console.log("evt.target.value =>", evt.target.value);
        this.setState({
            [evt.target.name] : evt.target.value
        })
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