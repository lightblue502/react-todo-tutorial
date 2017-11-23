import React from 'react'

export default class TodoListItem extends React.Component{

    state = {
        isEditing: false
    }

    onEditClick(){
        this.setState({
            isEditing: true
        })
    }

    onCancelClick(){
        this.setState({
            isEditing: false
        })
    }

    onSaveClick(event){
        event.preventDefault();
        const { id } = this.props;

        const newTask = this.editInput.value;
        this.props.saveTask(id, newTask)
        this.setState({ isEditing: false})
    }

    onDeleteClick(){
        const { id } = this.props;
        this.props.deleteTask(id);
    }

    renderTaskSection(){
        const { id, task, isCompleted } = this.props;
        
        const taskStyles = {
            color: isCompleted? 'green': 'red',
            cursor: 'pointer'
        }

        if(this.state.isEditing){
            return (
                <td style={taskStyles} onClick={this.props.toggleTask.bind(this, id)}>
                    <input 
                            type="text" 
                            defaultValue={task}
                            ref={instance => this.editInput = instance} 
                        />
                </td>
            )
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
                    <button onClick={this.onSaveClick.bind(this)}> SAVE </button>
                    <button onClick={this.onCancelClick.bind(this)}> Cancel </button>
                </td>
            )
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}> Edit </button>
                <button onClick={this.onDeleteClick.bind(this)}> Delete </button>
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