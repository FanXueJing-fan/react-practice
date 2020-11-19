import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        value:"hello",
        select:true
    }
    render() {
        return (
            <form>
                <label htmlFor="username">用户名</label>
                <input id="username" onChange={(e)=>{this.setState({value:e.target.value})}} value={this.state.value} type="text" placeholder="请输入内容" />
                <input type="text" defaultValue="hello-world"/>
                <hr/>
                <input type="checkbox" onChange={(e)=>{this.setState({select:!this.state.select})}} checked={this.state.select}/>
                <input type="checkbox" defaultChecked/>
            </form>
        )
    }
}
