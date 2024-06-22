import React from 'react'
import './Navbar.scss';
const Navbar = ({children}) => {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="logo">NEWS-KADAK</div>
      </div>
      <div className="right">
        {children}
      </div>
    </div>
  )
}

export default Navbar
