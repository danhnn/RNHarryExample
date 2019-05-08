import { Const } from "@shares"

const INITIAL_STATE = {
  showLoading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Const.LOGIN_SHOW_LOADING:
      return { ...state, showLoading: action.payload }
    default:
      return state
  }
}
