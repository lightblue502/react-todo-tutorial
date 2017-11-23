import React from 'react'
import _ from 'lodash'

export default class TodoCreate extends React.Component{

    state={
        error: null
    }

    renderError(){
        return this.state.error && <div style={{color: 'red'}}>
            {this.state.error}
        </div>
    }

    handleCreate(event){
        event.preventDefault(); //stop event default
        const createInput = this.createInput; //want bind this in handleCreate
        const task = this.createInput.value; 

        const validateInput = this.validateInput(task);

        if(validateInput){
            this.setState({ error: validateInput});
            return;
        }
        this.setState({ error: null });
        this.props.createTask(task);
        this.createInput.value = ""
    }

    validateInput(task){
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }

    render(){
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input 
                    type="text" 
                    ref={instance => this.createInput = instance} 
                    placeholder="What do I need to do?" />
                <button> Create </button>
                { this.renderError() }
            </form>
        )
    }
}