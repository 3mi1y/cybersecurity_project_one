import React, {Component} from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const Header = styled.header`
background-color: #222;
padding: 40px;
color: white;
text-align: center;`;

const TextContainer = styled.div`
text-align: center;
justify-content: center; 
padding: 0 30vw 10px 30vw;`;

const buttonStyles = {marginTop: '24px'};

class App extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            creditCardNumber: '',
            movie: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state)
    }

    getStudioGhibliFilm() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(data => data.json().then(
                films => {
                    let rand = Math.floor(Math.random() * Math.floor(20));
                    this.setState({movie: films[rand]}
                    )
                }
            ))
    }


    render() {
        return (
            <div>
                <Header>
                    <h1>CyberSecurity Project 1</h1>
                </Header>
                <TextContainer>
                    <h1>Enter some data please!</h1>
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
                    <Button variant="raised" color="primary" style={buttonStyles}>Submit</Button>
                </TextContainer>
                <TextContainer>
                <h1>Another External Service</h1>
                    <Button variant="raised" color="primary" style={buttonStyles} onClick={() => this.getStudioGhibliFilm()}>Get a Miyazaki film</Button>
                        <h3>{this.state.movie ? this.state.movie.title : 'Click the button above to fetch some data'}</h3>
                        <p>{this.state.movie ? `Description: ${this.state.movie.description}` : ''}</p>
                        <p>{this.state.movie ? `Director: ${this.state.movie.director}` : ''}</p>
                        <p>{this.state.movie ? `Rotten Tomatoes score: ${this.state.movie.rt_score}` : ''}</p>
                </TextContainer>
            </div>
        );
    }
}

export default App;
