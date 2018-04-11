import React, {Component} from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const Header = styled.header`
background-color: #222;
padding: 40px;
color: white;
text-align: center;
`

const Intro = styled.p`
font-size: large;
text-align: center;  
`

const TextContainer = styled.div`
text-align: center;
justify-content: center;
`

const buttonStyles = {
    marginTop: '24px'
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            creditCardNumber: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Header>
                    <h1>CyberSecurity Project 1</h1>
                </Header>
                <Intro>
                    Enter some data why don't ya? 🤗
                </Intro>
                <TextContainer>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    /><br/><br/>
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    /><br/><br/>
                    <TextField
                        label="CCN"
                        name="creditCardNumber"
                        value={this.state.creditCardNumber}
                        onChange={this.handleChange}
                    /><br/><br/>
                    <Button variant="raised" color="primary" style={buttonStyles}>
                        Submit
                    </Button>
                </TextContainer>
            </div>
        );
    }
}

export default App;
