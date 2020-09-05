import React from 'react'
import '../styles/sidebar.css'
import {sidebarRoutes as routes} from '../routes/SidebarRoutes'
import {Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        {routes.map((item, index) => {
          return (
            <li key={index} className={item.cname}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
