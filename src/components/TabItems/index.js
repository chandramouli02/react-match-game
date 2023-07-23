import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {tabsList, handleTabChange, activeCategory} = this.props

    return (
      <ul className="tabs-container">
        {tabsList.map(eachItem => (
          <li
            className={
              activeCategory === eachItem.tabId
                ? 'tab-item-selected tab-item'
                : 'tab-item'
            }
            key={eachItem.tabId}
          >
            <button
              className="tab-btn"
              type="button"
              onClick={() => {
                handleTabChange(eachItem.tabId)
              }}
            >
              {eachItem.displayText}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default TabItem
