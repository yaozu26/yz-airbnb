import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close' 
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '../indicator'

const PictureBrowser = memo((props) => {
  const { closeClick, itemPics } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const closeClickHandle = () => {
    closeClick()
  }

  const toggleClickHandle = (isLeft) => {
    let newIndex = isLeft ? currentIndex - 1 : currentIndex + 1
    if(newIndex < 0) newIndex = itemPics.length
    if(newIndex >= itemPics.length) newIndex = 0
    setCurrentIndex(newIndex)
  }

  return (
    <BrowserWrapper>
      <div className="dialog">
        <div className="header">
          <div className="close" onClick={closeClickHandle}>
            <IconClose/>
          </div>
        </div>
        <div className="content">
          <div className="left" onClick={e => toggleClickHandle(true)}>
            <IconArrowLeft width={100} height={100}/>
          </div>
          <div className="img-wrap">
            <SwitchTransition>
              <CSSTransition
                classNames="pic"
                key={itemPics[currentIndex]}
                timeout={200}
              >
                <img src={itemPics[currentIndex]} alt="" />
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="right" onClick={e => toggleClickHandle(false)}>
            <IconArrowRight width={100} height={100}/>
          </div>
        </div>
        <div className="footer">
          <div className="info">
            <div className="left">{currentIndex+1}/{itemPics.length}</div>
          </div>
          <div className="pic-list">
            <Indicator currentIndex={currentIndex} wrapWidth={500}>
              {
                itemPics.map((item, index) => {
                  return (
                    <div className={classNames('img-item', {active: currentIndex === index})} key={item}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  itemPics: PropTypes.array
}

export default PictureBrowser