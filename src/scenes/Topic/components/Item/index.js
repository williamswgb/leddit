import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { object, number, func,string } from 'prop-types'
import moment from 'moment'

import TextLink from 'components/TextLink'
import Button from 'components/Button'

import Vote from './components/Vote'
import './style.css'

class Item extends PureComponent {
  static propTypes = {
    data: object,
    index: number,
    onClickRemove: func,
    basePath: string,
  }

  static defaultProps = {
    data: {},
    index: null,
    onClickRemove: null,
    basePath: '',
  }

  state = {
    isExpanded: this.props.index === null,
  }

  handleClickExpand = this.props.index === null ? null : () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  handleClickRemove = this.props.onClickRemove === null ? null : () => {
    this.props.onClickRemove(this.props.data.id)
  }

  renderTitle() {
    const { data, basePath } = this.props
    return (
      <TextLink to={`${basePath}/${data.id}`}>
        <span className="Item-title">{data.title}</span>
      </TextLink>
    )
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
    const { data, index, basePath } = this.props
    const className = `Item-footer${index === null ? ' Item-footer--no-index' : ''}`
    return (
      <div className={className}>
        <TextLink to={`${basePath}/${data.id}/update`}>
          <span className="Item-footer-link">update</span>
        </TextLink>

        <span onClick={this.handleClickRemove} className="Item-footer-link">
          remove
        </span>
      </div>
    )
  }

  renderSubContent() {
    const { data, index } = this.props

    if (this.state.isExpanded && (data.text !== undefined && data.text.trim() !== '')) {
      const className = `Item-sub-content ${index === null ? ' Item-sub-content--no-index' : ''}`
      return (
        <div className={className}>
          <div>{data.text}</div>
        </div>
      )
    }
    return null
  }

  renderContent() {
    return (
      <div className="Item-content">
        {this.renderTitle()}
        {this.renderButtonContainer()}
        {this.renderFooter()}
        {this.renderSubContent()}
      </div>
    )
  }

  renderIndex() {
    const { index } = this.props

    return index === null ? null :
      <div className="Item-index">{index}</div>
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

export default withRouter(Item)
