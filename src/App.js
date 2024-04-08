import React from 'react'
import './App.css';
import { Drums } from './Drums.js'


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayText: 'now playing',
      playAudio: false,
      volume: .5,
    }
    console.log(this.state.volume);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  updateDisplay(text) {
    this.setState({
      displayText: text,
      })
  } 

  handleClick() {
    this.setState({
      playAudio: true
    })
  }


  handleVolume(event) {
    this.setState({
      volume: event.target.value
    })
  }

  render() {
    return(
      <div style={{margin: 'auto'}}id="drum-machine">
        <h1 style={{margin: 'auto', textAlign: 'center', color: 'black'}}>Drum Machine</h1>
        <h2 style={{margin: 'auto', marginTop: '10rem', marginBottom: '0', textAlign: 'center', color: 'black'}}>{this.state.displayText}</h2>
        <Drums id='display' updateDisplay={this.updateDisplay} handleVolume={this.handleVolume} state={this.state} handleClick={this.handleClick}/>
        <p style={{margin: 'auto', textAlign: 'center', fontStyle: 'italic'}}>* WHAT IS DISPLAYED IS THE ALPHA VERSION, AND DOES NOT REFLECT THE FINAL PROJECT!</p>
      </div>
    )
  }
}

export default App;
