import React, { PureComponent } from 'react'
import { object, number } from 'prop-types'

import TextLink from 'components/TextLink'
import Button from 'components/Button'
import Vote from './components/Vote'
import './style.css'

class Item extends PureComponent {
  static propTypes = {
    data: object,
    index: number,
  }

  static defaultProps = {
    data: {},
  }

  state = {
    isExpanded: this.props.index === undefined,
  }

  handleClickExpand = this.props.index === undefined ? false : () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  renderSubContent() {
    const { data } = this.props
    return (
      <div className="Item-sub-content">
        <div>{data.description}</div>
      </div>
    )
  }

  renderMainContent() {
    const { data } = this.props
    return (
      <div className="Item-main-content">
        <TextLink to={`/topic/${data.id}`}>
          <div className="Item-title">{data.title}</div>
        </TextLink>
        <Button
          className="Item-button"
          onClick={this.handleClickExpand}
          text={this.state.isExpanded ? 'Hide' : 'Show'}
        />
      </div>
    )
  }

  renderIndex() {
    const { index } = this.props

    return index === undefined ? false :
      <div className="Item-index">{index}</div>
  }

  renderContent() {
    return (
      <div className="Item-content-container">
        {this.renderMainContent()}
        {this.state.isExpanded ? this.renderSubContent() : false}
      </div>
    )
  }

  render() {
    return (
      <div className="Item">
        {this.renderIndex()}
        <Vote vote={this.props.data.vote} id={this.props.data.id} />
        {this.renderContent()}
      </div>
    );
  }
}

export default Item
