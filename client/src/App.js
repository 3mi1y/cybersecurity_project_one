import React, { Component } from 'react';
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
  state = {
    name: '',
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
          /><br/>
          <Button variant="raised" color="primary" style={buttonStyles}>
            Submit
          </Button>
        </TextContainer>
      </div>
    );
  }
}
export default App;
