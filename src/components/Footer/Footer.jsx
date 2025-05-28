import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
        {/* <img src={assets.twitter_icon} alt="" /> */}
        <img src={assets.youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of service</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Perference</li>
        <li>Corporate Information</li>
        <li>Contact</li>
      </ul>
      <p className='copyright-text
      '> © 1997 - 2023 Netflix,Inc.</p>
    </div>
  )
}

export default Footer