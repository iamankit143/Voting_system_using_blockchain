import React from 'react'
import footerLogo from '../assest/EvmFooter.webp'

const LeftFooter=()=>{
    return (
    <div className='footer-left'>
    <img src={footerLogo} alt='EVM Footer Logo' className='footer-logo' />
    </div>
    )
}
const RightFooter=()=>{
    return (
    <div className='footer-right'>
    <div className='first-info'>
    <h4 className='info-title'>INFORMATION</h4>
    <ul className='nav-list-footer'>
    <li>About Us</li>
    <li>Make In India</li>
    <li>Partner With Us</li>
    </ul>
    </div>
    <div className='second-info'>
    <h4 className='info-title'>SUPPORT</h4>
    <ul className='nav-list-footer'>
    <li>Service Centers</li>
    <li>EVM Policy</li>
    <li>FAQ's</li>
    <li>Contact Us</li>
    </ul>
    </div>
    </div>
    )
}

const FooterText=()=>{
    return (
    <div className='footer-text'>
    <p className='text'>�� 2024 EVM. All rights reserved.</p>
    </div>
    )
}

const Footer = () => {
  return (
    <div>
    <div className='footer'>
    <LeftFooter/>
    <RightFooter/>
    </div>
    <FooterText/>
    </div>
  )
}

export default Footer
