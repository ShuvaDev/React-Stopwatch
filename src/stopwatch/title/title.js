import React from 'react'
import './title.css'

class Title extends React.Component {
    state = {
        title: 'REACT STOPWATCH',
        isInput: false
    }
    editHandler = () => {
        this.setState({isInput: true})
    }
    inputChange = event => {
        this.setState({title: event.target.value})
    }
    keyPressHandler = event => {
        if(event.key === 'Enter') {
            this.setState({isInput: false})
        }
    }
    blurHandler = () => {
        this.setState({isInput: false})
    }
    render() {
        let output = null
        if(this.state.isInput) {
            output = <div className='Title'>
                <input type='text' onKeyPress={this.keyPressHandler} onBlur={this.blurHandler} onChange={this.inputChange} className='form-control' value={this.state.title} />
            </div>
        } else {
            output = (
                <div className='d-flex Title'>
                    <h1 className='display-4'>{this.state.title}</h1>
                    <span onClick={this.editHandler} className='edit-icon ml-auto'>
                        <img src="icon.png" width='40px' alt="icon"/>
                    </span>
                </div>
            )
        }
        return (
            <div>
                {output}
            </div>
        )
    }
}

export default Title