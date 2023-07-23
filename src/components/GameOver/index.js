import './index.css'
import {Component} from 'react'

class GameOver extends Component {
  render() {
    const {handleGameOver, score} = this.props
    return (
      <div className="container">
        <div className="game-over-container">
          <img
            className="trophy"
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
          />
          <p>YOUR SCORE</p>
          <h1>{score}</h1>
          <button
            className="btn-style btn-container"
            type="button"
            onClick={handleGameOver}
          >
            <img
              className="play-again-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }
}

export default GameOver
