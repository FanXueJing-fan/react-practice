import React, { Component } from 'react'
import eventHub from './eventHub'

export default class One extends Component {
    state = {
        color:'red'
    }
    componentDidMount(){
        // 监听
        eventHub.on('change',color => {
            this.setState({
                color
            })
        })
    }
    render() {
        return (
            <div style={{color:this.state.color}}>
                one
            </div>
        )
    }
}
