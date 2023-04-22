import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rate } from  'antd'
import classNames from 'classnames'
import { RoomWrapper } from './style'
import {Carousel} from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import Indicator from '@/base-ui/indicator'

const RoomItem = memo((props) => {
  const { itemData, itemWidth, itemClick } = props
  
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  function btnClickHandle(isLeft, event) {
    isLeft ? sliderRef.current.prev() : sliderRef.current.next()
    let newIndex = isLeft ? currentIndex -1 : currentIndex + 1
    if(newIndex < 0) {
      newIndex = itemData.picture_urls.length - 1
    }
    if(newIndex >= itemData.picture_urls.length) {
      newIndex = 0
    }
    setCurrentIndex(newIndex)
    event.stopPropagation()
  }

  function itemClickHandle() {
    if(itemClick) itemClick()
  }

  return (
    <RoomWrapper 
      verifyColor={ itemData.verify_info?.text_color || "#39576a"}
      bottomStyle={ itemData.bottom_info}
      itemWidth={itemWidth}
    >
      <div className="item-inner" onClick={itemClickHandle}>
        {
          !itemData.picture_urls &&
          (<div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>)
        }
        {
          itemData.picture_urls &&(
          <div className="swiper">
            <div className="control">
              <div className="btn left" onClick={e => btnClickHandle(true, e)}>
                <IconArrowLeft  width={30} height={30}/>
              </div>
              <div className="btn right" onClick={e => btnClickHandle(false, e)}>
                <IconArrowLeft width={30} height={30}/>
              </div>
            </div>
            <div className="indicator">
              <Indicator currentIndex={currentIndex} wrapWidth={50}>
                {
                  itemData.picture_urls.map((item, index) => {
                    return (
                      <div className={classNames('item', {'active': currentIndex === index})} key={index}></div>
                    )
                  })
                }
              </Indicator>
            </div>
            <Carousel dots={false} ref={sliderRef}>
              {
                itemData.picture_urls.map((item, index) => {
                  return (
                    <div className='cover' key={index}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Carousel>
          </div>)
        }
       
        <div className="info">
          <div className="title">{ itemData.verify_info.messages.join("·") }</div>
          <div className="desc">{ itemData.name }</div>
          <div className="price">{ itemData.price_format }/晚</div>
          <div className="bottom">
            <Rate 
              value={itemData.star_rating ?? 5} 
              style={{ color: itemData.star_rating_color, fontSize: '10px'}} 
              disabled/>
            <div className="count">{ itemData.reviews_count }</div>
            {
              itemData.bottom_info?.content && (
                <div className="landlord">
                  ·{itemData.bottom_info?.content}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </RoomWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem