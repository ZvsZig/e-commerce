import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p> 
                Welcome to my website! The virtual emporium where your wallet goes to get lighter! 
                We've got more stuff than your grandma's attic and more deals than a flea market 
                on a hot summer day. From insane fashion statements to heavy duty prosthesis, 
                we specialize in the strange, the useless, and the downright unnecessary.
                Need a robot assistant who eerily looks into your soul? We've got you covered. How 
                about a usb flash drive that can store not just files, but things as well? Yep, we've got
                that too. So, why wait? Dive into our digital treasure trove and emerge with more 
                random stuff than you ever knew you needed!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox