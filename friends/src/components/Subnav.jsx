import React from 'react'
import '../styles/subnav.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {useHistory, useLocation} from 'react-router-dom'

function Subnav(props) {
  const history = useHistory()
  const location = useLocation()
  console.log('props', location)

  console.log('history', history)
  console.log('location', location)
  return (
    <Breadcrumb>
      <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
      <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Subnav
