import React, { memo, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

import { HeaderWrapper, SearchArea } from './style'
import HeaderLeft from './c-cpn/header-left'
import HeaderCenter from './c-cpn/header-center'
import HeaderRight from './c-cpn/header-right'
import useScrollPosition from '@/hooks'

const AppHeader = memo(() => {
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }))

  const { isFixed, isTopAlpha } = headerConfig
  
  const [isSearchBox, setIsSearchBox] = useState(false)
  const searchClickHandle = (isSearch) => {
    setIsSearchBox(isSearch)
  }

  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  if(!isSearchBox) {
    prevY.current = scrollY
  }
  if(isSearchBox && Math.abs(scrollY - prevY.current) > 30) {
    setIsSearchBox(false)
  }
  
  let isAlpha = isTopAlpha && scrollY === 0
  console.log(isAlpha)

  return (
    <HeaderWrapper isAlpha={isAlpha} className={classNames({'fixed': isFixed})}>
      <div className="content">
        <HeaderLeft/>
        <HeaderCenter isSearchBox={isSearchBox} searchClick={searchClickHandle} isAlpha={isAlpha}/>
        <HeaderRight isAlpha={isAlpha}/>
      </div>
      <SearchArea isSearchBox={isSearchBox}/>
      { isSearchBox && <div className='cover-bg' onClick={e => searchClickHandle(false)}/> }
    </HeaderWrapper>
  )
})

export default AppHeader