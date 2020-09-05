import React, {useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {apiAuth} from '../utils/auth'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUserApi, userError} from '../redux/actions/userActions'
import Friends from './Friends'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sidebar from './Sidebar'

function Home() {
  const dispatch = useDispatch()
  const friends = useSelector((state) => state.user.users)

  useEffect(() => {
    dispatch(fetchUserApi())
  }, [])

  return (
    <div>
      <Row>
        <Col>
          {friends.map((friend) => (
            <Friends key={friend.id} data={friend} />
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default Home
