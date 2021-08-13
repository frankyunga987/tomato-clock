import React, { Component } from 'react'


import { PoweroffOutlined } from '@ant-design/icons';
import './index.css'

export default class Timer extends Component {

    state = {
        minute:'',
        second:'',
        worktime: 60,
        breaktime: 5,
        counting: false
    }

    updateCounter=()=> {
        this.state.minute = ("0" + Math.floor((this.state.worktime % 3600) / 60)).substr(-2, 2);
        this.state.second = ("0" + Math.floor(this.state.worktime % 60)).substr(-2, 2);
         this.setState({minute:this.state.minute,second:this.state.second})
      }



    startWork = () => {
        
        
        if (this.state.counting) {
            clearInterval(this.myInterval);
        } else {
            this.myInterval = setInterval(() => {
                

                this.setState({ worktime: this.state.worktime - 1 })
                this.updateCounter()
                if (this.state.worktime === 0) {
                    clearInterval(this.myInterval)
                    alert("可以休息5分鐘")
                }

            }, 1000)
        }
        this.state.counting = !this.state.counting;
    }



    startBreak = () => {

        if (this.state.counting) {
            clearInterval(this.myInterval);
        } else {
            this.myInterval = setInterval(() => {

                this.setState({ breaktime: this.state.breaktime - 1 })

                if (this.state.breaktime === 0) {
                    clearInterval(this.myInterval)
                    alert("可以休息5分鐘")
                }

            }, 1000)
        }
        this.state.counting = !this.state.counting;
    }


    render() {
        const { breaktime ,minute ,second } = this.state



        
        return (
            <div className="timer">
                <span>計時工作25分鐘,之後可以休息5分鐘</span>
                <div>
                    <button
                        className="button1"
                        onClick={this.startWork}
                    >
                        <PoweroffOutlined />
                        <br />
                        開始1分鐘倒數
                        <br />
                        {minute}:{second}
                    </button>
                    <button
                        className="button2"
                        onClick={this.startBreak}
                    >
                        <PoweroffOutlined />
                        <br />
                        開始5秒倒數
                        <br />
                        {breaktime}
                    </button>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.updateCounter()
    }


    
}