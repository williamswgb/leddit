import React, { PureComponent } from 'react'
import { array, func } from 'prop-types'

import Button from 'components/Button'
import TopicItem from 'scenes/Topic/components/Item'

import './style.css'

class ListView extends PureComponent {
  static propTypes = {
    data: array,
    removeTopic: func,
    goToNext: func,
    goToPrev: func,
  }

  static defaultProps = {
    data: [],
    removeTopic: null,
    goToNext: null,
    goToPrev: null,
  }

  renderList() {
    const { data, removeTopic } = this.props

    return data.map((topic, i) => (
      <TopicItem
        key={`TopicItem-${i}`}
        data={topic} index={i+1}
        basePath="/topic"
        onClickRemove={removeTopic}
      />
    ))
  }

  renderNavigation() {
    const { goToPrev, goToNext } = this.props

    if (goToPrev || goToNext) {
      return (
        <div className="List-navigation">
          <span className="List-navigation-text">view more:</span>
          <Button text="< prev" onClick={goToPrev} />
          {goToPrev && goToNext ? <div className="List-separator" />
            : null}
          <Button text="next >" onClick={goToNext} />
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
export default ListView;
