import React from 'react'
import { array } from 'prop-types'
import TopicItem from 'scenes/Topic/components/Item'
import './style.css'

const ListView = ({ data }) => (
  <div className="List">
    {data.map((topic, i) => (
      <TopicItem key={`TopicItem-${i}`} data={topic} index={i+1} />
    ))}
  </div>
)

ListView.propTypes = {
  data: array
}

export default ListView;
