import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div> 
        <div className='footer'>
            <div className='footer-content'>
                <img src={'logo-nextroll.svg'} alt=''/>

            </div>
            <div className='footer-content2'>
                <div className='footer-contents'>
                    <img src={'logo-adroll.svg'} className='adroll' alt=''/>
                    <img src={'logo-rollworks.svg'} className='roll' alt=''/>

                    {/* <div className='footer-text'>
                        <h6>NextRoll is as an equal opportunity employer.</h6>
                        <h5>We stand alongside organizations that support our Rollers and Community </h5>

                     </div> */}

                </div>
                
            </div>
            

             <div className='links'>
                    <h6>Careers</h6>
                    <h6>Trust Center</h6>
                    <h6>Terms of services</h6>
                    <h6>Website Terms of Use</h6>
                    <h6>Privacy Notice</h6>
                    <h6>Infringement Policy</h6>
                    <h6>Ad Opt Out</h6>
                    <h6>CCPA Notice at Collection</h6>
                    <h6>AdChoices</h6>
                
            </div> 

            <div className='privacy'>
                <h6> Your Privacy Choices</h6>
                 <img src={'your-privacy-choices.png'} className='privacy-logo' alt=''/>
            </div>
            <div className='learn-more'>
                <p>© 2006-2023, NextRoll, Inc. All rights reserved. AdRoll is a division of NextRoll. To learn more please visit <a href=''>nextroll.com</a></p>
            </div>

            <button className='btn'>DO NOT SHARE OR SELL MY PERSONAL INFORMATION</button>
           
        </div>
    </div>
  )
}

export default Footer