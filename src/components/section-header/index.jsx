import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subTitle } = props

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      { subTitle && <div className="sub-title">{subTitle}</div> }
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionHeader