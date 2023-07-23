import './index.css'
import {Component} from 'react'

class Header extends Component {
  render() {
    const {timer, score} = this.props
    return (
      <div className="header-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <ul className="score">
          <li className="timer">
            <p>
              Score:<span className="score-val">{score}</span>
            </p>
          </li>
          <li className="timer">
            <img
              className="timer-image"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="timer-sec">
              {timer}
              <span>sec</span>
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
