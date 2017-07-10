import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { number, array, object, func } from 'prop-types'
import queryString from 'query-string'

import Helper from 'services/helper'
import {
  order as orderTopics,
  remove as removeTopic
} from 'scenes/Topic/data/topics/action'

import ListView from './listView.js'

const MAX_ITEMS_PER_PAGE = 20;

class ListContainer extends Component {
  // Before rendered, order the topics list based on the current path in the route
  componentWillMount() {
    this.orderTopics(this.props.match)
  }

  // If the path changes, order the topics according to the current path in the route
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.path !== this.props.match.path) {
      this.orderTopics(nextProps.match)
    }
  }

  orderTopics = (match) => {
    const route = (match.path || "").split('/')
    this.props.orderTopics(route[route.length - 1])
  }

  removeTopic = (id) => {
    if (this.props.removeTopic) {
      this.props.removeTopic(id)
    }
  }

  onClickPrev = () => {
    const { history, location } = this.props
    const query = queryString.parse(location.search)
    const prevUrl = (Number(query.page) - 1) === 1 ? location.pathname :
      `?page=${Number(query.page) - 1}`

    history.push(prevUrl)
  }

  onClickNext = () => {
    const { history, location } = this.props
    const query = queryString.parse(location.search)
    history.push(`?page=${(Number(query.page || 1) + 1)}`);
  }

  // Check whether current page query allows the list to show prev button
  // e.g. (page 2 until the last page)
  goToPrev = (query) => {
    if (Helper.isNullOrUndefined(query.page) || Number(query.page) <= 1) {
      return null
    }
    return this.onClickPrev
  }

  // Check whether current page query allows the list to show next button
  // e.g. (page 1 until the page before the last page)
  goToNext = (query) => {
    const { realDataLength } = this.props
    const page = Helper.isNullOrUndefined(query.page) ? 1 : Number(query.page)

    if (page * MAX_ITEMS_PER_PAGE + 1 > realDataLength) {
      return null
    }
    return this.onClickNext
  }

  // Check whether the query page show the correct page number, or it can show data between
  // 0 to the maximum number of data in state reducer.
  checkRedirect(query, realDataLength) {
    return (!Helper.isNullOrUndefined(query.page) && isNaN(Number(query.page))) ||
      Number(query.page) < 1 || Number(query.page) > Math.ceil(realDataLength / MAX_ITEMS_PER_PAGE)
  }

  render() {
    const { location, realDataLength } = this.props
    const query = queryString.parse(location.search)

    // If current query is invalid, redirect the page to its base path location.
    if (this.checkRedirect(query, realDataLength)) {
      return <Redirect to={location.pathname} />
    }

    return (
      <ListView
        data={this.props.data}
        removeTopic={this.removeTopic}
        onClickPrev={this.goToPrev(query)}
        onClickNext={this.goToNext(query)}
        page={Number(query.page || 1)}
        maxItems={MAX_ITEMS_PER_PAGE}
      />
    )
  }
}

ListContainer.displayName = 'Topic List Container'

ListContainer.propTypes = {
  data: array,
  match: object,
  location: object,
  orderTopics: func,
  removeTopic: func,
  realDataLength: number,
}

ListContainer.defaultProps = {
  data: [],
  match: {},
  location: object,
  orderTopics: null,
  removeTopic: null,
  realDataLength: 0,
}

export default withRouter(connect((state, props) => {
  const { topics } = state.Topic.data
  // For handling number of data shown into the listView
  // The data shown will be based on the current page number which is stored in the url as query.
  // This will show data from index (min) until index (max) according to the current page number.
  const query = queryString.parse(props.location.search)
  const page = isNaN(Number(query.page)) || Number(query.page) >
    Math.ceil(topics.order.length / MAX_ITEMS_PER_PAGE) ? 1 : Number(query.page)
  const min = (page - 1) * MAX_ITEMS_PER_PAGE
  const max = Math.min(page * MAX_ITEMS_PER_PAGE, topics.order.length)

  return {
    realDataLength: topics.order.length,
    data: topics.order.slice(min, max).map((id) => topics.byHash[id]),
  }
}, { orderTopics, removeTopic })(ListContainer))
