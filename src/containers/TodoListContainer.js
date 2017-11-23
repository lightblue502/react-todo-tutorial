import React from 'react'
import _ from 'lodash'
import TodoCreate from '../components/TodoCreate'
import TodoList from '../components/TodoList'

let currentId = 2;
const todos = [
    {
        id: 1,
        task: 'make React tutorial',
        isCompleted: false
    },
    {   
        id: 2,
        task: 'eat dinner',
        isCompleted: true
    }
];

export default class TodoListContainer extends React.Component{

    state = {
        todos
    }

    createTask(task){
        this.setState({
            todos: [
                ...this.state.todos,
                { 
                    id: ++currentId,
                    task, 
                    isCompleted: false}
            ]
        })
    }

    toggleTask(id){

        let todos = _.map(this.state.todos, (todo) => {
            if(todo.id === id){
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }else{
                return todo;
            }
        })

        this.setState({
            todos
        })
    }

    saveTask(id, task){
        let todos = _.map(this.state.todos, (todo) => {
            if(todo.id === id){
                return {
                    ...todo,
                    task
                }
            }else{
                return todo;
            }
        })

        this.setState({
            todos
        })
    }

    deleteTask(id){
        let todos = _.reject(this.state.todos, todo => todo.id === id);
        this.setState({
            todos
        })
    }

    render(){
        return (
            <div>
                {/* input */}
                <TodoCreate 
                    todos={this.state.todos}
                    createTask={this.createTask.bind(this)}
                />
                
                {/* table */}
                <TodoList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        )
    }
}