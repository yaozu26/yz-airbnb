import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpn/home-banner'
import HomeSectionV1 from './c-cpn/home-section-v1'
import HomeSectionV2 from './c-cpn/home-section-v2'
import HomeSectionV3 from './c-cpn/home-section-v3'
import HomeLongfor from './c-cpn/home-longfor'
import { fetchHomeInfoAction } from '@/store/modules/home'
import { changeIsFixedAction } from '@/store/modules/main/createActions'
import { isEmptyObj } from '@/utils'
import AppHeader from '@/components/app-header'

const Home = memo(() => {
  // 从redux中获取数据
  const { 
    goodpriceInfo, 
    highscoreInfo,
    discountInfo,
    hotrecommendInfo,
    longforInfo,
    plusInfo
  } = useSelector(state => ({
    goodpriceInfo: state.home.goodpriceInfo,
    highscoreInfo: state.home.highscoreInfo,
    discountInfo: state.home.discountInfo,
    hotrecommendInfo: state.home.hotrecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  // 派发异步事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeInfoAction())
    dispatch(changeIsFixedAction({isFixed: true, isTopAlpha: true}))
  }, [dispatch])

  return (
    <HomeWrapper>
      <AppHeader/>
      <HomeBanner/>
      <div className="content">
        { isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo}/> }
        { isEmptyObj(hotrecommendInfo) && <HomeSectionV2 infoData={hotrecommendInfo}/> }
        { isEmptyObj(longforInfo) &&  <HomeLongfor infoData={longforInfo}/>}
        { isEmptyObj(goodpriceInfo) && <HomeSectionV1 infoData={goodpriceInfo}/> }
        { isEmptyObj(highscoreInfo) && <HomeSectionV1 infoData={highscoreInfo}/> }
        { isEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo} /> }
      </div>
    </HomeWrapper>
  )
})

export default Home