import React from 'react'

const Footer = () => {
      return (
            <>
                  <div className='footer-main'>
                        <h1>Logo</h1>
                        <div>
                              <h2>Links</h2>
                              <ul className='links-footer'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Terms & Conditions</li>
                              </ul>
                        </div>
                        <div className='social-icons-footer'>
                              <h2>Social Links</h2>
                              <div><span><i class="fa-brands fa-facebook"></i> Facebook</span></div>
                              <div><span><i class="fa-brands fa-facebook"></i> Facebook</span></div>
                              <div><span><i class="fa-brands fa-facebook"></i> Facebook</span></div>
                              <div><span><i class="fa-brands fa-facebook"></i> Facebook</span></div>
                        </div>
                  </div>
                  <h3 style={{ textAlign: 'center', background: 'darkGray', color: '#ffffff' }}>Copyrights @2025</h3>
            </>
      )
}

export default Footer
