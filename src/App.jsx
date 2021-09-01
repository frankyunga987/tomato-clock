import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './App.css'

import Timer from './components/Timer'
import TodoList from './components/TodoList'



export default class App extends Component {
    state={
        name:'',
    }
    render() {
        const {name}=this.state        

        return (
            <div className="contain">
                <Timer name={name}/>
                <TodoList getName={(name)=>{this.setState({name})}} />
                
            </div>
        )
    }
}
