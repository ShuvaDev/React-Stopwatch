import React, {Component} from 'react'

import Title from './title/title'
import CountDown from './countdown/countdown'
import Controller from './controller/controller'
import Laps from './laps/laps'

class App extends Component {
    intervalId = null
    state = {
        time: {
            min: 0,
            sec: 0,
            mili: 0
        },
        laps: []
    }
    getStart = () => {
        this.intervalId = setInterval(() => {
            let min = this.state.time.min
            let sec = this.state.time.sec
            let mili = this.state.time.mili
            if(mili >= 10) {
                sec = sec + 1
                mili = 0
            }
            if(sec >= 60) {
                min = min + 1 
                sec = 0
            }
            this.setState({time: {min, sec, mili: mili + 1}})
        }, 100)
    }
    getPause = () => {
        clearInterval(this.intervalId)
    }
    getLap = () => {
        let time = {
            ...this.state.time
        }
        this.setState({laps: [time, ...this.state.laps]})
    }
    getReset = () => {
        this.setState({
            time: {
                min: 0,
                sec: 0,
                mili: 0
            },
            laps: []
        })
    }
    render() {
        return (
            <div className='container text-center py-5'>
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <Title />
                        <CountDown time={this.state.time}/>
                        <Controller 
                            start={this.getStart}
                            pause={this.getPause}
                            reset={this.getReset}
                            lap={this.getLap}
                        />
                        <Laps laps={this.state.laps}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App