import React from 'react'

export default class TodoListItem extends React.Component{
    render(){
        return (
            <tr>
                <td style={{color: 'green'}}>
                    washing a car
                </td>
                <td>
                    <button> SAVE </button>
                    <button> Cancel </button>
                </td>
            </tr>
        )
    }
}