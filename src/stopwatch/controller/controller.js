import React, {Component} from 'react'

class Controller extends Component {
    state = {
        start: true,
        pause: false,
        lap: false,
        reset: false
    }
    startHandler = () => {
        this.setState({
            start: false,
            pause: true,
            lap: true
        }, () => {
            this.props.start()
        })
    }
    pauseHandler = () => {
        this.setState({
            start: true,
            pause: false,
            lap: false,
            reset: true

        }, () => {
            this.props.pause()
        })
    }
    lapHandler = () => {
        this.props.lap()
    }
    resetHandler = () => {
        this.setState({
            reset: false,
            start: true,
            pause: false,
            lap: false
        }, () => {
            this.props.reset()
        })
    }
    getController = () => {
        let output = null
        if(this.state.start && !this.state.reset) {
            output = <div>
                <button 
                    onClick={this.startHandler}
                    className='btn btn-success btn-lg px-5 ml-5'
                    >Start
                </button>
            </div>
        } else if(!this.state.start && this.state.pause && this.state.lap) {
            output = <div>
                <button 
                    onClick={this.pauseHandler}
                    className='btn btn-primary btn-lg px-5 ml-5'
                    >Pause
                </button>
                <button 
                    onClick={this.lapHandler}
                    className='btn btn-warning btn-lg px-5 ml-5'
                    >Lap
                </button>
            </div>
        } else if(this.state.start && this.state.reset) {
            output = <div>
                <button 
                    onClick={this.startHandler}
                    className='btn btn-success btn-lg px-5 ml-5'
                    >Start
                </button>
                <button 
                    onClick={this.resetHandler}
                    className='btn btn-danger btn-lg px-5 ml-5'
                    >Reset
                </button>
            </div>
        }
        return output
    }
    render() {
        return (
            <div className='text-left my-5'>
                {this.getController()}
            </div>
        )
    }
}

export default Controller