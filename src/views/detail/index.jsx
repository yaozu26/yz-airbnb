import React, { memo, useEffect } from 'react'

import { DetailWrapper } from './style'
import DetailPicture from './c-cpn/detail-picture'
import { useDispatch, useSelector } from 'react-redux'
import AppHeader from '@/components/app-header'
import { changeIsFixedAction } from '@/store/modules/main/createActions'

const Detail = memo(() => {
  const { itemInfo } = useSelector(state => ({
    itemInfo: state.detail.itemInfo
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeIsFixedAction(false))
  }, [dispatch])

  return (
    <DetailWrapper>
      <AppHeader/>
      <DetailPicture itemPics={itemInfo.picture_urls}/>
    </DetailWrapper>
  )
})

export default Detail