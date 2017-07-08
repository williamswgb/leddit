import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

import Component from 'components'

import logo from './images/Kappa.gif'
import './style.css'

class Home extends PureComponent {
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
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Leddit</h2>
        </div>

        <p className="Home-intro">
          Press button below to get started.
        </p>

        <Component.Button
          onClick={this.enter}
          text="Enter"
        />
      </div>
    );
  }
}

export default Home
