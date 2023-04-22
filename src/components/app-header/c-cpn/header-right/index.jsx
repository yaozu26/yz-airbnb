import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconNeteork from '@/assets/svg/icon-network'
import IconDir from '@/assets/svg/icon-dir'
import IconAvatar from '@/assets/svg/icon-avatar'

const HeaderRight = memo((props) => {
  const { isAlpha } = props

  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    function windowHanldeClick() {
      setIsShow(false)
    }

    window.addEventListener("click", windowHanldeClick)

    return () => {
      window.removeEventListener("click", windowHanldeClick)
    }
  }, [isShow])

  function profileClickHandle(event) {
    event.stopPropagation()
    setIsShow(!isShow)
  }

  return (
    <RightWrapper isAlpha={isAlpha}>
      <div className="btns">
        <span className="login btn">登录</span>
        <span className="register btn">注册</span>
        <span className="icon-network btn">
          <IconNeteork/>
        </span>
      </div>
      
      <div className="profile" onClick={profileClickHandle}>
        <div className="dir">
          <IconDir/>
        </div>
        <div className="avatar">
          <IconAvatar/>
        </div>
      </div>

      {isShow && (
        <div className="panel">
        <div className="top">
          <div className="register text">注册</div>
          <div className="login text">登录</div>
        </div>
        <div className="bottom">
          <div className="issue text">来爱彼迎发布房源</div>
          <div className="help text">帮助</div>
        </div>
      </div>
      )}
    </RightWrapper>
  )
})

export default HeaderRight