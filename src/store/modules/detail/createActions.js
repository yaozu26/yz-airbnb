import * as actionTypes from './constants'

export const changeItemInfoAction = (itemInfo) => ({
  type: actionTypes.CHANGE_ITEM_INFO,
  itemInfo
})