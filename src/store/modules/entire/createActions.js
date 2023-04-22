import * as actionTypes from './constants'
import { getEntireRoomlistData } from '@/services/modules/entire' 

export const changeCurrengPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomlistAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
}))

export const changeIsLoadingAction = (isLoading => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
}))


export const fetchRoomlistAction = (offset = 0) => {
  return async dispatch => {
    dispatch(changeCurrengPageAction(offset))
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomlistData(offset)
    dispatch(changeIsLoadingAction(false))
    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeRoomlistAction(res.list))
  }
}