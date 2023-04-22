import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { currentIndex, wrapWidth } = props

  const dotsListRef = useRef()

  useEffect(() => {
    const currentEl = dotsListRef.current.children[currentIndex]
    const itemLeft = currentEl.offsetLeft
    const itemWidth = currentEl.clientWidth
    const contentWidth = dotsListRef.current.clientWidth
    const contentScroll = dotsListRef.current.scrollWidth
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    if(distance < 0) distance = 0
    const totalDistance = contentScroll - contentWidth
    if(distance > totalDistance) distance =totalDistance

    dotsListRef.current.style.transform = `translateX(${-distance}px)`
  }, [currentIndex])

  return (
    <IndicatorWrapper wrapWidth={wrapWidth}>
      <div className="wrap">
        <div className="dots-list" ref={dotsListRef}>
          {props.children}
        </div>
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  currentIndex: PropTypes.number,
}

export default Indicator