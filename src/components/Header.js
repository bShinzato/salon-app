import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
    <>
    <nav className='nav'>
      <Link path='/' className='site-title'>
        Site Name
      </Link>
      <ul>
          <li>
        <Link path='/pricing'>
          Pricing
        </Link>
          </li>
          <li>
        <Link path='/About Me'>
          Services
        </Link>
          </li>
          <li>
        <Link path='/About Me'>
          Contact Me
        </Link>
          </li>
          <li>
        <Link path='/About Me'>
          About Me
        </Link>
          </li>
      </ul>
    </nav>
    </>
  )
}

export default Header