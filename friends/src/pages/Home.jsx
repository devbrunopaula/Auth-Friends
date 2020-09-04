import React, {useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {apiAuth} from '../utils/auth'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUserApi, userError} from '../redux/actions/userActions'

function Home() {
  const dispatch = useDispatch()
  const friends = useSelector((state) => state.user.users)

  useEffect(() => {
    dispatch(fetchUserApi())
  }, [])
  console.log('friends', friends)
  return (
    <div>
      <h1>Home</h1>
      {friends.map((friend) => (
        <h1>{friend.name}</h1>
      ))}
    </div>
  )
}

export default Home
