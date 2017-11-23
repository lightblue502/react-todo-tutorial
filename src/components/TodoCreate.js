import React from 'react'

export default class TodoCreate extends React.Component{

    handleCreate(event){
        event.preventDefault(); //stop event default
        const createInput = this.createInput; //want bind this in handleCreate
        const task = this.createInput.value; 
        this.props.createTask(task);
        this.createInput.value = ""
    }

    render(){
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input ref={instance => {
                    this.createInput = instance
                    }} type="text" placeholder="What do I need to do?" />
                <button> Create </button>
            </form>
        )
    }
}