import React, { PureComponent } from 'react'
import { object, number } from 'prop-types'

import Item from './item.js'

class ItemContainer extends PureComponent {
  static propTypes = {
    data: object,
    index: number,
  }

  static defaultProps = {
    data: {},
  }

  state = {
    isExpanded: this.props.index !== undefined,
  }

  handleClickExpand = this.props.index !== undefined ? false : () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  handleClickExpand = (vote) => {
    if (vote) {
      // Upvote
    } else {
      // Downvote
    }
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <Item
        {...this.props}
        index={this.props.data.id}
        isExpanded={isExpanded}
        onClickExpand={this.handleClickExpand}
        onClickVote={this.handleClickVote}
      />
    );
  }
}

export default ItemContainer
