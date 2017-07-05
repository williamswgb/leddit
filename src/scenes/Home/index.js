import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import logo from './Kappa.gif'
import './style.css'
import { showNotificationWithTimeout } from './data/notifications/action'

import Button from 'components/Button'

class HomeScene extends Component {
  state = { redirect: false }

  enter = () => {
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return (
        <Redirect to='/topic' />
      )
    }

    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Leddit</h2>
          </div>
          <p className="App-intro">
            Press button below to get started.
          </p>
          <div>
            <Button
              onClick={this.enter}
              text="Enter"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect((state) => {
  const { notifications } = state.Home.data
  return {
    notifications: notifications
  }
}, { showNotificationWithTimeout })(HomeScene))
