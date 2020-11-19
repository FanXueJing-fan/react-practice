import React, { Component } from 'react'

export default class Input extends Component {
    handle=(e)=>{
        if(e.keyCode === 13){
            this.props.setList(e.target.value)
            e.target.value = ''
        }
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='请输入内容...' onKeyUp={this.handle}/>
            </div>
        )
    }
}
