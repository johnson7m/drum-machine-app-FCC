import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonContainer } from './ButtonWrapper'

export class Drums extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            kit:    [
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
                    'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
                    'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
                    'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
                    'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
                ]
    }
    console.log(this.props.state.volume);
    }
    
    render() {
        return(
            <div id="button-wrapper">
                <ButtonContainer updateDisplay={this.props.updateDisplay} kitvolume={this.props.state.volume}kit={this.state.kit}/>
                <button id="kit-button">kit: default</button>
                <p id="volume">Drum volume: {Math.floor(this.props.state.volume * 100)}</p>
                <input onChange={this.props.handleVolume} max='1' min='0' type='range' step='0.01' value={this.props.state.volume}/>
            </div>
        )
    }
}