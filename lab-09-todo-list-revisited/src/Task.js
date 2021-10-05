import React from 'react'

export default function Task(props) {
    return <React.Fragment key={props.task._id}>
        <div className="card my-3">
            <div className="card-body">
                <h3>{props.task.description}</h3>
                <ul>
                    <li>Date Due:{props.task.date_due}</li>
                    <li>Completed:
                        <input type="checkbox" 
                         value={props.task.done}
                         checked={props.task.done}/>         
                    </li>
                </ul>
            </div>
        </div>
    </React.Fragment>
}