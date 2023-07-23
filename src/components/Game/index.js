import './index.css'
import {Component} from 'react'
import TabItem from '../TabItems'
import ImageItem from '../ImageItem'

class Game extends Component {
  componentDidMount = () => {
    const {handleTimer} = this.props
    handleTimer()
  }

  componentWillUnmount = () => {
    const {timerId} = this.props
    clearInterval(timerId)
  }

  render() {
    const {
      id,
      imageUrl,
      tabsList,
      handleTabChange,
      imagesList,
      category,
      handleImageClick,
    } = this.props

    return (
      <div className="game-bg">
        <div>
          <img className="random-img" src={imageUrl} alt="match" />
        </div>
        <div className="tabs-container">
          <TabItem
            tabsList={tabsList}
            handleTabChange={handleTabChange}
            activeCategory={category}
          />
        </div>
        <ul className="images-container">
          <ImageItem
            imagesList={imagesList}
            randomImgId={id}
            handleImageClick={handleImageClick}
            category={category}
          />
        </ul>
      </div>
    )
  }
}

export default Game
