import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const playAudio = (url, volume) => {
    let audio = new Audio(url);
    audio.volume = volume;
    audio.play();
}


export class ButtonContainer extends React.Component {
    constructor(props){
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(event) {
        const key = event.key.toLowerCase();
        const button = document.getElementById(key);
        if (button) {
            button.classList.add('pressed');
            setTimeout(() => button.classList.remove('pressed'), 100);
            button.click();
            this.props.updateDisplay(button.getAttribute('data-description'));
        }
    }

    handleClick(event) {
        playAudio(event.target.getAttribute('soundsrc'), this.props.kitvolume);
        this.props.updateDisplay(event.target.getAttribute('data-description'));
    }


    render() {
    return (
        <Container>
            <Row>
                <Col>
                    <button onClick={this.handleClick} soundsrc={this.props.kit[0]} className='drum-pad' id='q' fluid='md' data-description='Heater 1'>Q</button>
                    <button onClick={this.handleClick} className='drum-pad' soundsrc={this.props.kit[1]} id='w' fluid='md' data-description='Heater 2'>W</button>
                    <button onClick={this.handleClick} className='drum-pad' soundsrc={this.props.kit[2]} id='e' fluid='md' data-description='Heater 3'>E</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.handleClick} className='drum-pad' soundsrc={this.props.kit[3]} id='a' fluid='md' data-description='Heater 4'>A</button>
                    <button onClick={this.handleClick}  className='drum-pad' soundsrc={this.props.kit[4]} id='s' fluid='md' data-description='Heater 6'>S</button>
                    <button onClick={this.handleClick}  className='drum-pad' soundsrc={this.props.kit[5]} id='d' fluid='md' data-description='Dsc Oh'>D</button>
                </Col>              
            </Row>
            <Row>
                <Col>
                    <button onClick={this.handleClick}  className='drum-pad' soundsrc={this.props.kit[6]} id='z' fluid='md' data-description='Kick n Hat'>Z</button>
                    <button onClick={this.handleClick}  className='drum-pad' soundsrc={this.props.kit[7]} id='x' fluid='md' data-description='RP4 Kick'>X</button>
                    <button onClick={this.handleClick}  className='drum-pad' soundsrc={this.props.kit[8]} id='c' fluid='md' data-description='Cev H2'>C</button>
                </Col>              
            </Row>
        </Container>
    )
}
}

