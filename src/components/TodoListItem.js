import React from 'react'

export default class TodoListItem extends React.Component{

    state = {
        isEditing: false
    }

    renderTaskSection(){
        const { id, task, isCompleted } = this.props;
        
        const taskStyles = {
            color: isCompleted? 'green': 'red',
            cursor: 'pointer'
        }

        return (
            <td style={taskStyles} onClick={this.props.toggleTask.bind(this, id)}>
                { task }
            </td>
        )
    }

    renderActionSection(){
        if(this.state.isEditing){
            return (
                <td>
                    <button> SAVE </button>
                    <button> Cancel </button>
                </td>
            )
        }

        return (
            <td>
                <button> Edit </button>
                <button> Delete </button>
            </td>
        )
    }

    render(){
        return (
            <tr>
                { this.renderTaskSection() }
                { this.renderActionSection() }
            </tr>
        )
    }
}