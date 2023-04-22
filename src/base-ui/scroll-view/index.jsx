import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  const [isShowLeft, setIsShowLeft] = useState(false)
  const [isShowRight, setIsShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(false)
  const totalDistancsRef = useRef()

  // 页面渲染时判断右箭头按钮是否显示 
  const scrollSlotRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollSlotRef.current.scrollWidth
    const clientWidth = scrollSlotRef.current.clientWidth
    const totalDistance = scrollWidth - clientWidth
    totalDistancsRef.current = totalDistance
    if(totalDistance > 0) {
      setIsShowRight(true)
    }
  }, [props.children])

  // 控制左右切换事件
  function controlClickHandle(isLeft) {
    const newIndex = isLeft ? posIndex - 1 : posIndex + 1
    const newEl = scrollSlotRef.current.children[newIndex]
    const newElOffsetLeft = newEl.offsetLeft
    scrollSlotRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
    setPosIndex(newIndex)
    setIsShowLeft(newElOffsetLeft > 0)
    setIsShowRight(totalDistancsRef.current > newElOffsetLeft)
  }
<div className="va"></div>
  return (
    <ScrollWrapper>
      {
        isShowLeft && (
          <div className="left" onClick={e => controlClickHandle(true)}>
            <IconArrowLeft/>
          </div>
        )
      }
      {
        isShowRight && (
          <div className="right" onClick={e => controlClickHandle(false)}>
            <IconArrowRight/>
          </div>
        )
      }
      <div className="content">
        <div className="slot" ref={scrollSlotRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

export default ScrollView