import React from 'react'

export default function EditTask(props) {
    return <React.Fragment>
        <h1>{props.title}</h1>
        <div>
            <label className="form-label">Name:</label>
            <input type="text"
                name="taskName"
                value={props.task.description}
                onChange={props.updateField}
                className="form-control"
            />
        </div>
        <div>
            <label className="form-label">Due Date:</label>
            <input type="date"
                name="dueDate"
                value={props.task.dueDate}
                onChange={props.updateField}
                className="form-control"
            />
        </div>
        <button className="my-3"
            onClick={props.onDone}>{props.doneLabel}</button>
    </React.Fragment>
}