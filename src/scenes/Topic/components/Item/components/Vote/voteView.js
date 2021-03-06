import React from 'react'
import { number, func } from 'prop-types'

import Component from 'components'

import './style.css'

const VoteView = ({ vote, onClickVote }) => (
  <div className="Vote">
    <Component.Button
      className="Vote-button"
      onClick={() => onClickVote(true)}
      text="^"
    />
    <div className="Vote-number">{vote === 0 ? '•' : vote}</div>
    <Component.Button
      className="Vote-button"
      onClick={() => onClickVote(false)}
      text="V"
    />
  </div>
)

VoteView.displayName = 'Item Vote View'

VoteView.propTypes = {
  vote: number,
  onClickVote: func.isRequired,
}

VoteView.defaultProps = {
  vote: 0,
  onClickVote: null
}

export default VoteView
