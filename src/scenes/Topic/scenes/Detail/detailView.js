import React from 'react'
import { object, func, string } from 'prop-types'
import TopicItem from 'scenes/Topic/components/Item'

const DetailView = ({ data, basePath, onClickRemove }) => (
  <div className="Detail">
    <TopicItem
      data={data}
      basePath={basePath}
      onClickRemove={onClickRemove}
    />
  </div>
)

DetailView.propTypes = {
  data: object,
  basePath: string,
  onClickRemove: func,
}

DetailView.defaultProps = {
  data: {},
  basePath: '',
  func: null,
}

export default DetailView;
