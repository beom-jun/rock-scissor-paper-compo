import React, { Component } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: "Rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: ""
    };
  }

  play = (userChoice) => {
    this.setState({ userSelect: choice[userChoice] });
    const computerChoice = this.randomChoice();
    this.setState({ computerSelect: computerChoice });
    this.setState({
      userResult: this.judgement(choice[userChoice], computerChoice),
      computerResult: this.judgement(computerChoice, choice[userChoice])
    });
  };

  resetGame = () => {
    this.setState({
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: ""
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    const { userSelect, computerSelect, userResult, computerResult } = this.state;
    return (
      <div className='container main-back'>
        <h2 className='button body'>WHO IS WINNER? ROCK SCISSOR PAPER!</h2>
        <div className="main body">
          <Box title="YOU" item={userSelect} result={userResult} />
          <Box title="COMPUTER" item={computerSelect} result={computerResult} />
        </div>

        <div className="button body">
          <button onClick={() => this.play("scissors")} type="button" className="btn btn-outline-light">SCISSOR<img src="https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png" className='button-size' alt="scissors"></img></button>
          <button onClick={() => this.play("rock")} type="button" className="btn btn-outline-light">ROCK<img src="https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png" className='button-size' alt="rock"></img></button>
          <button onClick={() => this.play("paper")} type="button" className="btn btn-outline-light">PAPER<img src="https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png" className='button-size' alt="paper"></img></button>
          <button onClick={this.resetGame} type="button" className="btn btn-outline-danger">RESET</button>
        </div>
      </div>
    );
  }
}

export default App;