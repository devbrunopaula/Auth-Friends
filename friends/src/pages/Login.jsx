import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {useDispatch} from 'react-redux'
import {getLoginToken} from '../redux/actions/authActions'
import {useHistory} from 'react-router-dom'

function Login(props) {
  // Inital Form State
  const initialValue = {
    email: 'bruno@aol.com',
    password: 'password',
  }

  // Local State
  const [value, setValue] = React.useState(initialValue)
  const dispatch = useDispatch()
  let history = useHistory()
  // Handle Input Changes
  const handleChanges = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  //HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getLoginToken(value, history))
  }

  return (
    <div>
      <Container>
        <Row className='justify-content-center align-items-center'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                value={value.email}
                placeholder='Enter email'
                onChange={handleChanges}
                name='email'
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={value.passowrd}
                onChange={handleChanges}
                name='password'
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default Login
