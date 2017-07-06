import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './style.css'

import Header from './components/Header'

class Topic extends Component {
  renderContent() {
    return (
      <div className="Topic-content"/>
    )
  }

  render() {
    return (
      <div className="Topic">
        <Header />
        {this.renderContent()}
        {/* {Add Route Here} */}
      </div>
    );
  }
}

export default withRouter(connect((state) => {
  const { Topic } = state
  return {
    topics: Topic.data.topics.byHash,
  }
})(Topic))
