import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './App.css'

import Timer from './components/Timer'
import TodoList from './components/TodoList'



export default class App extends Component {
    render() {
        return (
            <div className="contain">
                <Timer/>
                <TodoList />
                
            </div>
        )
    }
}
