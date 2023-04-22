import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon-search'
import searchData from '@/assets/data/search_titles.json'

const HeaderCenter = memo((props) => {
  const { isSearchBox, searchClick, isAlpha } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  const titleClickHandle = (index) => {
    setCurrentIndex(index)
  }

  const searchBoxClickHandle = () => {
    if(!isSearchBox) searchClick(true)
  }

  return (
    <CenterWrapper isAlpha={isAlpha}>
      <CSSTransition in={!isSearchBox} classNames="bar" timeout={300} unmountOnExit={true}>
        <div className="search-section" onClick={searchBoxClickHandle}>
          <div className="area">
            <span className="text">全球</span>
          </div>
          <span className="line"></span>
          <div className="date">
            <span className="text">入住退房日期</span>
          </div>
          <span className="line"></span>
          <div className="keywork">
            <span className="text">关键字</span>
          </div>
          <div className="icon-search">
            <IconSearch/>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearchBox} classNames="detail"  timeout={300} unmountOnExit={true}>
        <div className="search-tabs">
          <div className="titles">
            {
              searchData.map((item, index) => {
                return (
                  <div 
                    onClick={e => titleClickHandle(index)}
                    className={classNames('title', { 'active': currentIndex === index })}
                    key={index}
                  >
                    <span className="text">{item.title}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="tabs">
            {
              searchData.map((item, index) => {
                return (
                  <div className={classNames("tab", {"active": currentIndex === index})} key={index}>
                    {
                      item.searchInfos.map((iten, indey) => {
                        return (
                          <div className="wrap" key={indey}>
                            <div className="tab-item">
                              <div className="text">{iten.title}</div>
                              <div className="desc">{iten.desc}</div>
                              {
                                indey === item.searchInfos.length - 1 && (
                                  <div className="search-icon">
                                    <IconSearch/>
                                  </div>
                                )
                              }
                            </div>
                            { indey !== item.searchInfos.length - 1 && <div className="line"/>}
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter