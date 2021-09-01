import React, { Component } from 'react'


import { PoweroffOutlined, PauseOutlined, CaretRightOutlined } from '@ant-design/icons';
import './index.css'



export default class Timer extends Component {
    play = React.createRef();
    pause = React.createRef();

    state = {
        minute: '',
        second: '',
        breakMin: '',
        breakSec: '',
        worktime: 1500,
        breaktime: 300,
        counting: false
    }

    updateCounter = () => {
        // this.state.minute = ("0" + Math.floor((this.state.worktime % 3600) / 60)).substr(-2, 2);
        // this.state.second = ("0" + Math.floor(this.state.worktime % 60)).substr(-2, 2);
        this.setState({
            minute: ("0" + Math.floor((this.state.worktime % 3600) / 60)).substr(-2, 2),
            second: ("0" + Math.floor(this.state.worktime % 60)).substr(-2, 2),
            breakMin: ("0" + Math.floor((this.state.breaktime % 3600) / 60)).substr(-2, 2),
            breakSec: ("0" + Math.floor(this.state.breaktime % 60)).substr(-2, 2),
        })

    }



    startWork = () => {



        if (this.state.counting) {
            clearInterval(this.workInterval);
            this.pause.current.style.display='none'
            this.play.current.style.display='inline-block'

        } else {

            this.play.current.style.display='none'
            this.pause.current.style.display='inline-block'
            this.workInterval = setInterval(() => {


                this.setState({ worktime: this.state.worktime - 1 })
                this.updateCounter()
                if (this.state.worktime === 0) {
                    clearInterval(this.workInterval)
                    alert("可以休息5分鐘")
                }

            }, 1000)
        }
        this.setState({ counting: !this.state.counting });
    }



    startBreak = () => {

        if (this.state.counting) {
            clearInterval(this.myInterval);
        } else {
            this.myInterval = setInterval(() => {

                this.setState({ breaktime: this.state.breaktime - 1 })

                if (this.state.breaktime === 0) {
                    clearInterval(this.myInterval)
                    alert("休息結束")
                }

            }, 1000)
        }
        this.setState({ counting: !this.state.counting });
    }

    restart = () => {
        this.pause.current.style.display='none'
        this.play.current.style.display='inline-block'
        clearInterval(this.workInterval)
        this.setState({ worktime: 1500 }, () => this.updateCounter())
    }

    render() {
        const { minute, second, breakMin, breakSec, } = this.state




        return (
            <div className="timer">
                <span className="title">計時工作25分鐘,之後可以休息5分鐘</span>
                <div>
                    <button
                        className="work-button"
                        onClick={this.startWork}
                    >

                        <CaretRightOutlined className="start" ref={this.play}/>

                        <PauseOutlined className="pause" ref={this.pause}/>

                        <br />
                        <span>
                            {this.props.name}
                        </span>
                        <br />
                        <span>
                            開始25分鐘倒數
                        </span>
                        <br />
                        {minute}:{second}
                    </button>
                    <button onClick={this.restart}>restart</button>
                    <button onClick={this.restart}>restart</button>
                    <button
                        className="rest-button"
                        onClick={this.startBreak}
                    >
                        <PoweroffOutlined />
                        <br />
                        <span>
                            休息
                        </span>
                        <br />
                        開始5分鐘倒數
                        <br />
                        {breakMin}:{breakSec}
                    </button>

                </div>
            </div>
        )
    }

    componentDidMount() {
        this.updateCounter()
    }



}
