import React from 'react'

export default function FormRedux(props) {
    return (
        <React.Fragment>
            <div>
                <label>User Name:</label>
                <input type="text" name="username" 
                        value={props.username} 
                        onChange={props.updateFunc}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" 
                       value={props.email} 
                       onChange={props.updateFunc}/>
            </div>
            <button>Register</button>
        </React.Fragment>

    )
}