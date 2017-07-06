import React from 'react'
import { number, func } from 'prop-types'

import Button from 'components/Button'
import './style.css'

const VoteView = ({ vote, onClickVote }) => (
  <div className="Vote">
    <Button
      className="Vote-button"
      onClick={() => onClickVote(true)}
      text="^"
    />
    <div>{vote}</div>
    <Button
      className="Vote-button"
      onClick={() => onClickVote(false)}
      text="V"
    />
  </div>
)

VoteView.propTypes = {
  vote: number,
  onClickVote: func,
}

VoteView.defaultProps = {
  vote: 0,
}

export default VoteView
