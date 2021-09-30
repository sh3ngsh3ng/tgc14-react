import React from 'react'

export default class SurveyForm extends React.Component {
    state = {
        "name": "",
        "colour":"",
        "country":""
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
                    <input type="radio" name="color" value="red"/><span>Red</span>
                    <input type="radio" name="color" value="blue"/><span>Blue</span>
                    <input type="radio" name="color" value="green"/><span>Green</span>
                </div>
                <div>
                <label>Country:</label>
                    <select>
                     
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
}