import React from 'react'
import "../style.css"

function About() {
  return (
    <div>
          <div className="relative w-fill">
              <img src="assets/NHheader.png" className='w-full' alt="" />

              <div className="absolute inset-0 bg-black opacity-50"></div>

              <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white outlines w-full flex justify-center">
                  <h1 className="text-white-100 text-4xl md:text-[55px] text-center justify-center slide-in flex flex-wrap gap-6 ">About Us</h1>
              </div>
            

            </div>

        <div className='max-w-[1200px] mx-auto my-0 px-5'>
          <div className='my-20'>
              <h2 className='text-center text-3xl font-medium'>Central Lubricants</h2>
          <p className='text-center text-md mt-5'>Central Lubricant is dedicated to fostering a culture of innovation and continuous improvement. We actively encourage the sharing of ideas, insights, and knowledge across our organization, embracing change as a catalyst for growth and progress. We are committed to staying at the forefront of our industry, driving innovation and embracing new technologies and practices to better serve our customers and stakeholders.

            For the past decade, Central Lubricants has been a trusted leader in the distribution of various brands, applications, grades, and packaged lubricants across Ethiopia. With a strong track record of success and a relentless commitment to excellence, we are poised to continue driving growth and making a positive impact in the years to come.</p>
          </div>

            <div className='flex flex-wrap justify-center gap-x-32 gap-y-24 items-center'>
            <div className='max-w-[500px]'>
                  <h2 className='text-center text-3xl font-medium'>Mission</h2>
            <p className='text-center text-md mt-5'>To become always better in the industry, to ensure being a lubricant distributor of choice to customers, an employer of choice to employees and a customer of choice to vendors, to contribute positively to social, economic and professional development of the industry by undertaking social responsibilities.</p>

            </div>

                  <div className='max-w-[500px]'>
                      <h2 className='text-center text-3xl font-medium'>Vision</h2>
            <p className='text-center text-md mt-5'>To become the most competitive and leading lubricant distributer in Ethiopia by providing customer focused, market driven and safe product and quality service delivery by 2027.</p>

                  </div>
        </div>
        </div>
              <div className='my-28 bg-[#353535] py-14 flex flex-col justify-center items-center'>
            <p className='text-center  text-white-100'>Check our History</p>
            <p className='text-center text-3xl  text-white-100 mb-10 mt-1'>What We've Achived</p>
            <div className='flex md:block px-5 gap-x-4'>
            <div className='flex flex-wrap items-center  mb-8 gap-y-16 justify-center'>
                      <img src="assets/about/year1.png" alt="" />
                      <img className='hidden md:inline' src="assets/about/yearconnect.png" alt="" />
                      <img src="assets/about/year2.png" alt="" />
                      <img className='hidden md:inline' src="assets/about/yearconnect.png" alt="" />
                      <img src="assets/about/year3.png" alt="" />
            </div>
            <div className='text-white-100 flex flex-wrap justify-between gap-x-20'>
                <div className='text-center'>
                  <p className='text-[17px] font-medium'>Birth of Central Lubriacnts</p>
              <p className='text-sm max-w-[300px]'>Founded with a vision to revolutionize the lubricant industry, Central Lubricants emerged from a passionate pursuit to redefine standards, innovate product offerings, and foster lasting relationships within the market. </p>
                </div>
                  <div className='text-center'>
                      <p className='text-[17px] font-medium'>Currently Opperating</p>
              <p className='text-sm max-w-[300px]'>Central Lubricants is a strong enterprise in distribution of various brands, application, grades and packaged lubricants to different market segments in Ethiopia.</p>
                  </div>
                  <div className='text-center'>
                      <p className='text-[17px] font-medium'>Futrure Goal</p>
              <p className='text-sm max-w-[300px]'>In our decade-long vision, we aspire to emerge as Ethiopia's premier lubricant distributor by 2027.  </p>
                  </div>
            </div>
        </div>
        </div>
        
          <div className='my-28 max-w-[1200px] mx-auto px-5'>
                  <p className='text-center text-3xl mb-10'>Some of Our <br /> Big Name Partners</p>

        {/* <marquee behavior="scroll" direction="left" scrollamount="25" className="w-full flex"> */}
        <div className='max-w-[1300px] mx-auto my-0 '>
          <div className="marquee-container flex ml-7">

            <div className="marquee flex ">
              <img className='h-24 mx-6' src="assets/Partners/CHEVRON.jpg" alt="" />
              <img className='h-24 mx-6' src="assets/Partners/DELTA.jpg" alt="" />
              <img className='h-24 mx-6' src="assets/Partners/EXXONMOBIL.png" alt="" />
              <img className='h-24 mx-6' src="assets/Partners/FOTEX.png" alt="" />        </div>
          </div>
        </div>
        {/* </marquee> */}

        </div>

      

    </div>
  )
}

export default About