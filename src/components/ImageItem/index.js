import './index.css'
import {Component} from 'react'

class ImageItem extends Component {
  render() {
    const {imagesList, randomImgId, handleImageClick, category} = this.props

    const filteredImagesList = imagesList.filter(
      eachItem => eachItem.category === category,
    )
    return (
      <ul className="img-container">
        {filteredImagesList.map(eachItem => (
          <li className="img-item" key={eachItem.id}>
            <button type="button" className="img-btn">
              <img
                className="thumbnail-img"
                src={eachItem.thumbnailUrl}
                alt="thumbnail"
                onClick={() => handleImageClick(eachItem.id, randomImgId)}
              />
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default ImageItem
