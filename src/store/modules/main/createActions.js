import * as actionTypes from './constans'

export const changeIsFixedAction = (headerConfig) => ({
  type: actionTypes.CHANGE_IS_FIXED,
  headerConfig
})