import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className='footer-content'>
        <h3 className='footer-title'>Darelie Ramos</h3>
        <p className='footer-text'>Expertise in haircuts, haircolor, hair treatment, facials, and nails.</p>
        <ul className='footer-links'>
          <li className='footer-links-item'><i class="fa-brands fa-instagram"></i></li>
          <li className='footer-links-item'><i class="fa-brands fa-facebook"></i></li>
          <li className='footer-links-item'><i class="fa-brands fa-tiktok"></i></li>
        </ul>
      <div className='footer-copyright'>
        <p className='footer-copyright-text'>Copyright © Darelie Ramos. Designed by Brandon Shinzato</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer