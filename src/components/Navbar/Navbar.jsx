import React, { useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useRef } from 'react'
import { logout } from '../../firebase'
const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, [])
  
  return (
    <div>
      <div ref={navRef} className="navbar">
        <div className="navbar-left">
          <img src={assets.logo} alt="" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" className='icons' />
          <p>Children</p>
          <img src={assets.bell_icon} alt="" className='icons' />
          <div className="navbar-profile">
          <img src={assets.profile_img} alt="" className='profile' />
          <img src={assets.caret_icon} alt="" className='icons' />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign out of account</p>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar