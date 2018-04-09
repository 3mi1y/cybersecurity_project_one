import React, { Component } from 'react';
import styled from 'styled-components';

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

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <h1>CyberSecurity Project 1</h1>
        </Header>
        <Intro>
          Enter some data why don't ya?
        </Intro>
      </div>
    );
  }
}

export default App;
