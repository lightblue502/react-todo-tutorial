import React from 'react'
import TodoListHeader from './TodoListHeader'
import TodoListItem from './TodoListItem'

export default class TodoList extends React.Component{
    render(){
        return (
            <table>
                <TodoListHeader />
                <tbody>
                    <TodoListItem />
                    <TodoListItem />
                    <TodoListItem />
                </tbody>
            </table>
        )
    }
}