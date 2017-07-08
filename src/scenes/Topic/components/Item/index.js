import React, { PureComponent } from 'react'
import { object, number } from 'prop-types'
import moment from 'moment'

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
    index: null,
  }

  state = {
    isExpanded: this.props.index === null,
  }

  handleClickExpand = this.props.index === null ? null : () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  renderButtonContainer() {
    const { data } = this.props

    return (
      <div className="Item-button-container">
        {
          this.props.index === null || data.text === undefined || data.text.trim() === ''
          ? null :
          <Button
            className="Item-button"
            onClick={this.handleClickExpand}
            text={this.state.isExpanded ? 'X' : '#'}
          />
        }
        <div className="Item-time-submitted">
          {`submitted ${moment(data.updatedAt).fromNow()}`}
        </div>
      </div>
    )
  }

  renderFooter() {
    const { data } = this.props
    return (
      <div className="Item-footer">
        <TextLink to={`/topic/${data.id}/update`}>
          <span className="Item-footer-link">update</span>
        </TextLink>

        <TextLink to={`/topic/${data.id}/remove`}>
          <span className="Item-footer-link">remove</span>
        </TextLink>
      </div>
    )
  }

  renderTitle() {
    const { data } = this.props

    return (
      <TextLink to={`/topic/${data.id}`}>
        <span className="Item-title">{data.title}</span>
      </TextLink>
    )
  }

  renderMainContent() {
    return (
      <div>
        {this.renderTitle()}
        {this.renderButtonContainer()}
        {this.renderFooter()}
      </div>
    )
  }

  renderSubContent() {
    const { data } = this.props
    return (
      <div className="Item-sub-content">
        <div>{data.text}</div>
      </div>
    )
  }

  renderIndex() {
    const { index } = this.props

    return index === null ? null :
      <div className="Item-index">{index}</div>
  }

  renderContent() {
    const { data } = this.props
    return (
      <div className="Item-content-container">
        {this.renderMainContent()}
        {this.state.isExpanded && (data.text !== undefined && data.text.trim() !== '') ?
          this.renderSubContent() : false}
      </div>
    )
  }

  render() {
    const { data } = this.props
    return (
      <div className="Item">
        {this.renderIndex()}
        <Vote vote={data.vote} id={data.id} />
        {this.renderContent()}
      </div>
    );
  }
}

export default Item
