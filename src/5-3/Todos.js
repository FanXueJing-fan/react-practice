import React, { Component } from 'react'
import List from './List'
import Input from './Input'

export default class todos extends Component {
    constructor () {
        super()
        this.state={
            list:[
                {id:1,title:'哈哈哈哈哈'},
                {id:2,title:'嘿嘿嘿嘿嘿'},
            ]
        }
    }
    setList = title => {
        this.setState({
            list:[...this.state.list,{id:parseInt(Math.random()*100),title}]
        })
    }
    render() {
        let {list} = this.state
        return (
            <div>
                <Input setList={this.setList}/>
                <List list={list} />
            </div>
        )
    }
}
