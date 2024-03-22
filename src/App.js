import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setUserResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(judgement(computerChoice, choice[userChoice])); // 컴퓨터의 결과 계산
  };

  const resetGame = () => {
    setUserSelect(null);
    setComputerSelect(null);
    setUserResult("");
    setComputerResult("");
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div className='container main-back'>
      <h2 className='button body'>WHO IS WINNER? ROCK SCISSOR PAPER!</h2>
      <div className="main body">
        <Box title="YOU" item={userSelect} result={userResult} />
        <Box title="COMPUTER" item={computerSelect} result={computerResult} />
      </div>

      <div className="button body">
        <button onClick={() => play("scissors")} type="button" className="btn btn-outline-light">SCISSOR<img src="https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png" className='button-size' alt="scissors"></img></button>
        <button onClick={() => play("rock")} type="button" className="btn btn-outline-light">ROCK<img src="https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png" className='button-size' alt="rock"></img></button>
        <button onClick={() => play("paper")} type="button" className="btn btn-outline-light">PAPER<img src="https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png" className='button-size' alt="paper"></img></button>
        <button onClick={resetGame} type="button" className="btn btn-outline-danger">RESET</button>
      </div>
    </div>
  );
}

export default App;