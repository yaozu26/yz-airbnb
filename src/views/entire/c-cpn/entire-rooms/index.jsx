import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RoomsWrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeItemInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  const { roomList } = props

  const { totalCount, isLoading } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }))

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const itemClickNavigate = useCallback((item) => {
    const id = item.id
    dispatch(changeItemInfoAction(item))
    navigate(`/detail/:${id}`)
  }, [navigate, dispatch])

  return (
    <RoomsWrapper>
      <SectionHeader title={`${totalCount}多处住所`}/>
      <div className="room-list">
        {
          roomList.map(item => {
            return <RoomItem itemData={item} itemWidth="20%" itemClick={e =>itemClickNavigate(item)} key={item.id}/>
          })
        }
      </div>
      { isLoading && <div className="cover-loading"></div> }
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {
  roomList: PropTypes.array
}


export default EntireRooms