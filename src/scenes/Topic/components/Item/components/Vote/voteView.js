import React from 'react'
import { number, func } from 'prop-types'

import './style.css'

const VoteView = ({ vote, onClickVote }) => (
  <div className="Vote">
    <div className="Vote-button" />
    <div>{vote}</div>
    <div className="Vote-button" />
  </div>
)

VoteView.propTypes = {
  vote: number,
  onClickVote: func
}

export default VoteView
