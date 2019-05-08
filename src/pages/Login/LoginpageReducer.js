import { Const } from "@shares"

const INITIAL_STATE = {
  showLoading: false,
  alertMessage: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Const.LOGIN_SHOW_LOADING:
      return { ...state, showLoading: action.payload }
    case Const.SET_ALERT_MESSAGE:
      return { ...state, alertMessage: action.payload }
    default:
      return state
  }
}
