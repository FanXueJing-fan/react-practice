import React, { Component } from 'react'
import eventHub from './eventHub'

export default class Two extends Component {
    color16(){//十六进制颜色随机
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
        return color;
    }
    change = () => {
        // 触发
        eventHub.trigger('change',this.color16())
    }
    render() {
        return (
            <div>
                two---<button onClick={this.change}>更改onecolor</button>
            </div>
        )
    }
}
