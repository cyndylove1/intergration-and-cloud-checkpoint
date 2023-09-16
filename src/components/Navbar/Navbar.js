import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <div>
        <div className='container'>
          <div className='main'>
          
          
            
            <img src={'logo-adroll.svg'} className='logo'  alt=''/>
            
            <ul>
              <li id='adroll'>Why AdRoll?</li>
              <li>Marketing Platform</li> 
              <li>For Ecommerce</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>

            
              <div className='login'>
                <h3>Log in</h3>
              <button>GET STARTED</button>

              </div>

          </div>
         
      </div>
      <div className='text'>
        <h5>Become an AI expert! 🤖 Learn how AI can help improve your marketing performance and save you time. <a href=''>Register Now&rarr;</a> </h5>

      </div>
        
    </div>
        
      
          
       
        
  )
}

export default Navbar