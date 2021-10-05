import React from 'react'
import Task from './Task'

export default class TaskList extends React.Component {
    state = {
        'tasks': [
            {
                'id': 1,
                'description': "Walk the dog",
                'date_due': '2021-10-02',
                'done': false
            },
            {
                'id': 2,
                'description': "Water the plants",
                'date_due': '2021-10-03',
                'done': false
            },
            {
                'id': 3,
                'description': 'Pay the bills',
                'date_due': '2021-10-04',
                'done': false
            }
        ],
    }

    render() {
        return (<React.Fragment>
            {this.state.tasks.map( (eachTask) => {
                return <Task t={eachTask}/>
            })}    
        </React.Fragment>)
    }
}