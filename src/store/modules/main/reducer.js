import * as actionTypes from './constans'

const initialState = {
  headerConfig : {
    isFixed: false,
    isTopAlpha: false
  }
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_IS_FIXED :
      return { ...state, headerConfig: action.headerConfig }
    default :
      return state
    }
}

export default reducer