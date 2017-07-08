import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { object, number, func,string } from 'prop-types'
import classNames from 'classnames'
import moment from 'moment'

import Helper from 'services/helper'
import Component from 'components'

import ItemComponent from './components'
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
    isExpanded: Helper.isNullOrUndefined(this.props.index),
  }

  handleClickExpand = Helper.isNullOrUndefined(this.props.index) ? null :
    () => { this.setState({ isExpanded: !this.state.isExpanded }) }

  handleClickRemove = this.props.onClickRemove ? () =>
    { this.props.onClickRemove(this.props.data.id) } : null

  renderTitle() {
    const { data, basePath } = this.props
    return (
      <Component.TextLink to={`${basePath}/${data.id}`}>
        <span className="Item-title">{data.title}</span>
      </Component.TextLink>
    )
  }

  renderButtonContainer() {
    const { data, index } = this.props

    return (
      <div className="Item-button-container">
        {
          Helper.isNullOrUndefined(index) || !Helper.isNonEmptyString(data.text)
          ? null :
          <Component.Button
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
    const footerClassName = classNames('Item-footer', {
      'Item-footer--no-index': Helper.isNullOrUndefined(index)
    })
    return (
      <div className={footerClassName}>
        <Component.TextLink to={`${basePath}/${data.id}/update`}>
          <span className="Item-footer-link">update</span>
        </Component.TextLink>

        <span onClick={this.handleClickRemove} className="Item-footer-link">
          remove
        </span>
      </div>
    )
  }

  renderSubContent() {
    const { data, index } = this.props

    if (this.state.isExpanded && Helper.isNonEmptyString(data.text)) {
      const subContentClassName = classNames('Item-sub-content', {
        'Item-sub-content--no-index': Helper.isNullOrUndefined(index)
      })

      return (
        <div className={subContentClassName}>
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

    return Helper.isNullOrUndefined(index) ? null : <div className="Item-index">{index}</div>
  }

  render() {
    const { data } = this.props
    return (
      <div className="Item">
        {this.renderIndex()}
        <ItemComponent.Vote vote={data.vote} id={data.id} />
        {this.renderContent()}
      </div>
    );
  }
}

export default withRouter(Item)
