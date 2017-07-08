import React, { PureComponent } from 'react'
import { number, array, func } from 'prop-types'

import Component from 'components'
import TopicComponent from 'scenes/Topic/components'

import './style.css'

class ListView extends PureComponent {
  renderList() {
    const { data, removeTopic, page, maxItems } = this.props

    return data.map((topic, i) => (
      <TopicComponent.Item
        key={`TopicItem-${i}`}
        data={topic}
        index={((page - 1) * (maxItems || data.length))+i+1}
        basePath="/topic"
        onClickRemove={removeTopic}
      />
    ))
  }

  renderNavigation() {
    const { onClickPrev, onClickNext } = this.props

    if (onClickPrev || onClickNext) {
      return (
        <div className="List-navigation">
          <span className="List-navigation-text">view more:</span>
          {onClickPrev ? <Component.Button text="< prev" onClick={onClickPrev} /> : null}
          {onClickPrev && onClickNext ? <div className="List-separator" /> : null}
          {onClickNext ? <Component.Button text="next >" onClick={onClickNext} /> : null}
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="List">
        {this.renderList()}
        {this.renderNavigation()}
      </div>
    )
  }
}

ListView.displayName = 'Topic List View'

ListView.propTypes = {
  maxItems: number,
  page: number,
  data: array,
  removeTopic: func,
  onClickNext: func,
  onClickPrev: func,
}

ListView.defaultProps = {
  maxItems: null,
  page: 1,
  data: [],
  removeTopic: null,
  onClickNext: null,
  onClickPrev: null,
}

export default ListView;
