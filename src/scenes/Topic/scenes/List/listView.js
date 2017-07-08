import React from 'react'
import { array, func } from 'prop-types'
import TopicItem from 'scenes/Topic/components/Item'

const ListView = ({ data, removeTopic }) => (
  <div className="List">
    {data.map((topic, i) => (
      <TopicItem
        key={`TopicItem-${i}`}
        data={topic} index={i+1}
        basePath="/topic"
        onClickRemove={removeTopic}
      />
    ))}
  </div>
)

ListView.propTypes = {
  data: array,
  removeTopic: func,
}

ListView.defaultProps = {
  data: [],
  removeTopic: null,
}

export default ListView;
