import * as actionTypes from './constants'

const initialState = {
  itemInfo: {}
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_ITEM_INFO :
      return { ...state, itemInfo: action.itemInfo }
    default: 
      return state
  }
}

export default reducer