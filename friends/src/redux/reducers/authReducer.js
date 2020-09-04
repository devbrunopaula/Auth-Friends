import * as actions from '../actions/types'

const initalState = {
  isAuthenticate: false,
  token: '',
  error: '',
}

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.data,
        isAuthenticate: true,
      }
    case actions.LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isAuthenticate: false,
      }
    case actions.LOGOUT:
      return {
        ...state,
        token: '',
        isAuthenticate: false,
      }

    default:
      return state
  }
}
