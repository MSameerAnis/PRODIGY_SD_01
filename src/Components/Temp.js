import React, { Component } from 'react'
import './temp.css'
export class Temp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            scale: 'c',
            temp: 0
        }
    }
    calciusHandler = (e) => {
        this.setState({
            scale: 'c',
            temp: e.target.value
        })
        console.log("asdsa")
    }
    fahrenhiteHandler = (e) => {
        this.setState({
            scale: 'f',
            temp: e.target.value
        })
    }

    render() {

        const temp = this.state.temp;
        const scale = this.state.scale;
        const cal = scale == 'f' ? (temp - 32) * 5 / 9 : temp;
        const fah = scale == 'c' ? (temp * 9 / 5) + 32 : temp;


        return (
            <div className='container'>

                <h2>
                    Temperature Converter
                </h2>

                <fieldset className='pri'>
                    <legend>
                        <strong >Scale Calcius</strong>
                    </legend>

                    <input type="number" value={cal}

                        onChange={this.calciusHandler} />
                </fieldset>



                <fieldset className='pri'>
                    <legend>
                        <strong >Scale Fahrenhite</strong>
                    </legend>

                    <input type="number" value={fah}
                        onChange={this.fahrenhiteHandler} />
                </fieldset>










            </div>
        )
    }
}

export default Temp
