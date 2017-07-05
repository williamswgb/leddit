import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './style.css'
import logo from './images/dendiface.png'

class Topic extends Component {
  renderHeader() {
    return (
      <div className="Topic-header">
        <div className="Topic-title-container">
          <img src={logo} className="Topic-logo" alt="logo" />
          <div className="Topic-title">
            LEDDIT
          </div>
        </div>
        <div className="Topic-category-container">
          <div className="Topic-category">hot</div>
          <div className="Topic-category">new</div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="Topic">
        {this.renderHeader()}
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
