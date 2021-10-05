import React from 'react'
import AddTask from './AddTask'
import Task from './Task'

export default class TaskList extends React.Component {
    state = {
        'tasks': [
            {
                '_id': 1,
                'description': "Walk the dog",
                'date_due': '2021-10-02',
                'done': false
            },
            {
                '_id': 2,
                'description': "Water the plants",
                'date_due': '2021-10-03',
                'done': false
            },
            {
                '_id': 3,
                'description': 'Pay the bills',
                'date_due': '2021-10-04',
                'done': false
            }
        ],
        newTaskName:'',
        newTaskDueDate:''
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    processAddTask = () => {
        // create a new task logic here
        
        // 1. clone the original tasks array
        // 2. make changes to the clone
        // 3. replace the original tasks array with clone
        this.setState({
            'tasks': [...this.state.tasks, {
                "_id": Math.floor(Math.random() * 10000 + 9999),
                'description': this.state.newTaskName,
                'date_due': this.state.newTaskDueDate,
                'completed':false
            }]
        })
    }

    render() {
        return (<React.Fragment>
            
            {/* Render the add task form */}
            <AddTask
                taskName={this.state.newTaskName}
                dueDate={this.state.newTaskDueDate}
                updateField={this.updateFormField}
                addTask={this.processAddTask}
            />

            {/* Render each task */}
            {this.state.tasks.map( (eachTask) => {
                return <Task task={eachTask} key={eachTask._id}/>
            })}

        </React.Fragment>)
    }
}