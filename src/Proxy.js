import React, { Component } from 'react'
// import axios from 'axios'

export default class Proxy extends Component {
    /*
        【注】
            1 在请求本地资源时，将其放在public下才可以找到
    
    */ 
    componentDidMount(){
        // // 1请求卖座数据，在相应头中设置了Access-Control-Allow-Origin:* 但是请求不到，需要在请求头中添加字段
        // axios.get("https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4865231",{
        //     headers:{
        //                 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15984753841366499679797249"}',
        //                 'X-Host': 'mall.film-ticket.film.list'
        //     }
        // }).then(res => {
        //     console.log(res)
        // })

        // 2请求猫眼数据，后端没有给我们设置cors,需通过代理请求数据
    }
    render() {
        return (
            <div>
                proxy
            </div>
        )
    }
}
