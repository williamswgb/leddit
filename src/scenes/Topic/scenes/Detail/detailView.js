import React from 'react'
import { object } from 'prop-types'
import TopicItem from 'scenes/Topic/components/Item'

const DetailView = ({ data }) => (
  <div className="Detail">
    <TopicItem data={data} />
  </div>
)

DetailView.propTypes = {
  data: object,
}

DetailView.defaultProps = {
  data: {},
}

export default DetailView;
