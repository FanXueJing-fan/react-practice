import React, { Component } from 'react'

export default class list extends Component {
    render() {
        return (
            <div>
                <ul>
                {
                    this.props.list.map((item) => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}
