import './index.css'
import {Component} from 'react'
import Header from '../Header'
import GameOver from '../GameOver'
import Game from '../Game'

class MatchGame extends Component {
  state = {
    score: 0,
    timer: 60,
    category: 'FRUIT',
    isGameGoing: true,
    randomItem: '',
  }

  handleTimer = () => {
    const {imagesList} = this.props

    const randomItem = imagesList[Math.floor(Math.random() * imagesList.length)]
    this.setState({randomItem, score: 0})
    this.timerId = setInterval(() => {
      const {timer} = this.state
      if (timer === 0) {
        clearInterval(this.timerId)
        this.setState({isGameGoing: false})
      } else {
        this.setState(prevState => ({
          timer: prevState.timer - 1,
        }))
      }
    }, 1000)
  }

  handleTabChange = activeCategory => {
    this.setState({category: activeCategory})
  }

  handleImageClick = (id, randomImgId) => {
    const {imagesList} = this.props
    const randomItem = imagesList[Math.floor(Math.random() * imagesList.length)]

    if (id === randomImgId) {
      this.setState(prevState => ({
        isGameGoing: true,
        score: prevState.score + 1,
        randomItem,
      }))
    } else {
      this.setState({isGameGoing: false})
    }
  }

  handleGameOver = () => {
    this.setState({isGameGoing: true, timer: 60})
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {score, timer, category, isGameGoing, randomItem} = this.state
    const {id, imageUrl} = randomItem
    const {imagesLength} = imagesList.length

    return (
      <div className="main-container">
        <Header score={score} timer={timer} />
        {isGameGoing && (
          <Game
            id={id}
            imageUrl={imageUrl}
            tabsList={tabsList}
            handleTabChange={this.handleTabChange}
            imagesList={imagesList}
            category={category}
            handleImageClick={this.handleImageClick}
            handleTimer={this.handleTimer}
            timerId={this.timerId}
            timer={timer}
          />
        )}
        {!isGameGoing && (
          <GameOver
            handleGameOver={this.handleGameOver}
            score={score}
            isGameGoing={isGameGoing}
            imagesLength={imagesLength}
          />
        )}
      </div>
    )
  }
}

export default MatchGame
