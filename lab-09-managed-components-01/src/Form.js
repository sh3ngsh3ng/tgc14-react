import React from 'react'

export default class Form extends React.Component {
    state = {
        'username': '',
        'email': ''               
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    render() {
        return <React.Fragment>
            <div>
                <label>User Name:</label>
                <input type="text" name="username" value={this.state.username} onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={this.state.email} onChange={this.updateFormField}/>
            </div>
            <button>Register</button>
        </React.Fragment>
    }
}