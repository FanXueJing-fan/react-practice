import React, { Component } from 'react'
import axios from 'axios'
export default class Todolist extends Component {
    /*
    
        通过axios进行get。post请求
        通过受控组件控制表单数据，其中的注意点是：给该文本框起控制它状态的状态值一样的变量名，这样可以通过事件对象的id来区别不同的文本框
    */ 
    state = {
        list: [],
        username:'',
        age:0
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        axios.get("http://localhost:4000/list").then(res => {
            this.setState({
                list:res.data
            })
        })
    }
    handle = (e) => {
        //@@@@区分不同的输入框,关键在于给输入框起和控制其状态的变量相同的名字
        // console.log(e.target.id)
        this.setState({
            [e.target.id]:e.target.value,
        },()=>{
            console.log(this.state)
        })
    }
    add = () => {
        axios.post("http://localhost:4000/list",{
            username:this.state.username,
            age:this.state.age
        }).then(res => {
            // console.log('success')
            this.getData()
            // 在函数组件中尽量不要直接给状态赋值,会报警告
            this.setState({
                username:"",
                age:0
            })
        })
    }
    remove = (id) => {
        // console.log(id)
        axios.delete("http://localhost:4000/list/"+id).then(res => {
            this.getData()
        })
    }
    updata = data => {
        // console.log(data)
        // prompt第二个参数时默认输入框中的内容
        let newVal = prompt('请输入内容',data.username + ' ' + data.age)
        if(newVal){
            // split将字符串转为数组
            var arr = newVal.split(' ')
            axios.patch("http://localhost:4000/list/"+data.id,{
                username:arr[0],
                age:arr[1]
            }).then(res => {
                this.getData()
            })
        }
    }
    render() {
        let {list, username, age} = this.state
        return (
            <div>
                <input id='username' type='text' placeholder='请输入用户名' value={username} onChange={this.handle}/>
                <input id='age' type='text' placeholder='请输入年龄' value={age} onChange={this.handle}/>
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        list.map(item => {
                            return <li key={item.id}>{item.username}----{item.age}
                            <button onClick={this.remove.bind(this,item.id)}>删除</button>
                            <button onClick={this.updata.bind(this,item)}>更新</button>
                            </li>
                        })
                    }
                
                </ul>
            </div>
        )
    }
}
