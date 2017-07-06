import React, { PureComponent } from 'react'
import { number, func } from 'prop-types'
import { connect } from 'react-redux'

import { upvote, downvote } from 'scenes/Topic/data/topics/action'
import VoteView from './voteView'

class VoteContainer extends PureComponent {
  static propTypes = {
    id: number,
    vote: number,
    upvote: func,
    downvote: func,
  }

  onClickVote = (isUp) => {
    if (isUp) {
      this.props.upvote(this.props.id)
    } else {
      this.props.downvote(this.props.id)
    }
  }

  render() {
    return (
      <VoteView
        vote={this.props.vote}
        onClickVote={this.onClickVote}
      />
    );
  }
}

export default connect(null,
  { upvote, downvote })(VoteContainer)
