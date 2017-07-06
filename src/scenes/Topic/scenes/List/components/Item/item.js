import React, { PureComponent } from 'react'
import { number, bool, func, object } from 'prop-types'

import './style.css'

class Item extends PureComponent {
  static propTypes = {
    index: number,
    data: object,
    isExpanded: bool,
    onClickVote: func,
    onClickExpand: func,
  }

  static defaultProps = {
    data: {},
    isExpanded: true,
  }

  renderDescription() {
    const { data } = this.props
    return (
      <div>
        {data.description}
      </div>
    )
  }

  renderTitle() {
    const { data } = this.props
    return (
      <div>
        {data.title}
      </div>
    )
  }

  renderIndex() {
    const { index } = this.props

    return index === undefined ? false : <div className="Item-index">{index}</div>
  }

  renderVote() {
    const { data } = this.props
    return (
      <div className="Item-vote">
        {data.vote}
      </div>
    )
  }

  renderContent() {
    return (
      <div className="Item-content">
        {this.renderTitle()}
        {this.renderDescription()}
      </div>
    )
  }

  render() {
    return (
      <div className="Item">
        {this.renderIndex()}
        {this.renderVote()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Item
