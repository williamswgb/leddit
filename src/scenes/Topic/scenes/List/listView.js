import React from 'react'

import TopicItem from 'scenes/Topic/components/Item'
import './style.css'

const List = ({ data }) => (
  <div className="List">
    {data.map((topic, i) => (
      <TopicItem key={`TopicItem-${i}`} data={topic} />
    ))}
  </div>
)

export default List;
