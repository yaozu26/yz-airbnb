import React, { memo } from 'react'

import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon-logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logoClickHandle() {
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className="info" onClick={logoClickHandle}>
        <IconLogo/>
        <h2 className="title">爱彼迎</h2>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft