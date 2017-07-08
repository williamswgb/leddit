import React from 'react'
import { array } from 'prop-types'
import TopicItem from 'scenes/Topic/components/Item'

const ListView = ({ data }) => (
  <div className="List">
    {data.map((topic, i) => (
      <TopicItem key={`TopicItem-${i}`} data={topic} index={i+1} basePath="/topic" />
    ))}
  </div>
)

ListView.propTypes = {
  data: array
}

ListView.defaultProps = {
  data: []
}

export default ListView;
