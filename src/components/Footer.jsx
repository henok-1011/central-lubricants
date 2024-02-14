import React from 'react'

function Footer() {
  return (
      <div className='bg-[#25242A] mx-auto my-0 pt-20 pb-8 mt-32'>
        <div className='flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-center gap-[500px] items-center max-w-[1300px] text-white-100 mx-auto my-0'>


          <div>
              <p className='text-[#EEA347] text-xl font-semibold mb-2'>Links</p>
              <ul className='flex gap-5'>
                      <li><a href="">Home</a></li>
                      <li><a href="">About</a></li>
                      <li><a href="">Product</a></li>
                      <li><a href="">Contact</a></li>
              </ul>
          </div>

          <div>
              <p className='text-[#EEA347] text-xl font-semibold mb-2'>Socials</p>
              <ul className='flex justify-center items-center gap-2'>
                      <a href=""><img src="assets/socials/twi.png" alt="" /></a>
                      <a href=""><img src="assets/socials/insta.png" alt="" /></a>
                      <a href=""><img src="assets/socials/link.png" alt="" /></a>
                      <a href=""><img src="assets/socials/tik.png" alt="" /></a>
              </ul>
          </div>
          

          </div>

        <div className='flex flex-col justify-center items-center mt-10'>
        <img src="/assets/logo.png" alt="" />
              <p className='text-white-100'>© 2024 All Rights Reserved</p>
          </div>
    </div>
  )
}

export default Footer