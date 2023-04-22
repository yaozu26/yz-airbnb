import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './c-cpn/entire-filter'
import EntireRooms from './c-cpn/entire-rooms'
import EntirePagination from './c-cpn/entire-pagination'
import { isEmptyObj } from '@/utils'
import { fetchRoomlistAction } from '@/store/modules/entire'
import { changeIsFixedAction } from '@/store/modules/main/createActions'
import AppHeader from '@/components/app-header'

const Entire = memo(() => {
  const { 
    currentPage,
    roomList
  } = useSelector(state => ({
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomlistAction(currentPage))
    dispatch(changeIsFixedAction({isFixed: true}))
  }, [dispatch, currentPage])

  return (
    <EntireWrapper>
      <AppHeader/>
      <EntireFilter/>
      { isEmptyObj(roomList) && <EntireRooms roomList={roomList}/> }
      { !!roomList.length && <EntirePagination/> }
    </EntireWrapper>
  )
})

export default Entire