import * as actions from '../actions/types'
import {apiAuth} from '../../utils/auth'

export const userError = (error) => {
  return {
    type: actions.USER_FETCH_FAILED,
    error,
  }
}

export const deleteUser = (id) => {
  return {
    type: actions.USER_DELETE_SUCCESS,
    id,
  }
}

export const fetchUser = () => {
  return {
    type: actions.FETCHING_USER,
  }
}

export const fetchUserSuccess = (data) => {
  return {
    type: actions.USER_FETCH_SUCCESS,
    data,
  }
}

export const fetchUserApi = () => {
  return (dispatch) => {
    dispatch(fetchUser())
    apiAuth()
      .get('/friends')
      .then((res) => {
        dispatch(fetchUserSuccess(res.data))
      })
  }
}
