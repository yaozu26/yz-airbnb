import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMore from '@/assets/svg/icon-more'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  let { name } = props

  const navigator = useNavigate()
  function navigatorClickHandle() {
    navigator("/entire")
  }

  return (
    <FooterWrapper textColor={name ? "#00848A" : "#000"}>
      <div className="info" onClick={navigatorClickHandle}>
        <span className="text">
          { name ? `显示全部${name}房源` : "显示全部" }
        </span>
        <IconMore/>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter