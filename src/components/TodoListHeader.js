import React from 'react'

export default class TodoListHeader extends React.Component{
    render(){
        return (
            <thead>
                <th> Task </th>
                <th> Action </th>
            </thead>
        )
    }
}