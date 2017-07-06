import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { number, func } from 'prop-types'

import VoteView from './voteView'

class VoteContainer extends PureComponent {
  static propTypes = {
    vote: number,
    upVote: func,
    downVote: func,
  }

  render() {
    return (
      <VoteView
        {...this.props}
      />
    );
  }
}

// Will be updated
export default VoteContainer
// export default withRouter(connect((state) => {
//   const { Topic } = state
//   return {
//     vote: Topic.data.topics.byHash,
//   }
// })(VoteContainer))
