import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from './Kappa.gif'
import './style.css'
import { showNotificationWithTimeout } from './data/notifications/action'

class HomeContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Leddit</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={() => this.props.showNotificationWithTimeout('Hello')}>Show "Hello"</button>
          &nbsp;
          <button onClick={() => this.props.showNotificationWithTimeout('Async')}>Show "Async"</button>
          {this.props.notifications.map((notification, index) => {
            return <h1 key={notification.id}>{notification.text}</h1>
          })}
        </div>
      </div>
    );
  }
}

const ConnectedApp = connect((state) => {
  const { notifications } = state.Home.data
  return {
    notifications: notifications
  }
}, { showNotificationWithTimeout })(HomeContainer)

export default ConnectedApp
