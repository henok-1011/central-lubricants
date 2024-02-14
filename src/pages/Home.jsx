import React from 'react'

function Home() {
  return (
    <div>

      <div className="relative w-fill overflow-hidden h-[100vh]">
        <img src="assets/herobg.png" className='w-full h-[100vh]' alt="" />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-[85%] md:top-[50%] px-5 md:px-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white outlines w-full flex flex-col md:flex-row h-[100vh]  items-center max-w-[1300px] mx-auto my-0">
          <div>
            <p className="text-white-100 md:text-[17px] text-start  justify-center slide-in ">Discover our premium automotive lubricants today. </p>
            <h1 className="text-white-100 text-4xl md:text-[45px] text-start leading-[50px] justify-center slide-in flex flex-wrap mb-10">Drive with confidence. <br /> Superior performance starts here</h1>
            <a href="/products" className='bg-[#081ED1] px-5 py-3 text-white-100 font-semibold rounded-md w-fit mt-16'>See Products</a>
          </div>
          <img className='hidden md:inline' src="assets/heroimg.png" alt="" />
        </div>

      </div>

      <div className='mt-28'>
        <h2 className='text-center text-3xl font-medium'>What We Do Best</h2>
        <div className='flex flex-wrap max-w-[1300px] mx-auto my-12 justify-center px-5 md:justify-between items-center'>
          <div className='flex flex-col justify-center items-center max-w-[400px] mb-10'>
            <img src="assets/home/gear-icon.png" alt="" />
            <p className='text-center text-xl font-medium mt-3'>Efficient Lubrication Solutions</p>
            <p className='text-center text-[15px] mt-1'>From engine oils to transmission fluids, we excel in providing high-quality lubricants tailored to enhance performance and prolong engine life.</p>
          </div>

          <div className='flex flex-col justify-center items-center max-w-[400px] mb-10'>
            <img src="assets/home/speedometer-icon.png" alt="" />
            <p className='text-center text-xl font-medium mt-3'>Optimized Performance</p>
            <p className='text-center text-[15px] mt-1'>Our expertise lies in formulating lubricants that optimize engine efficiency, delivering smoother rides and maximizing horsepower output.</p>
          </div>

          <div className='flex flex-col justify-center items-center max-w-[400px] mb-10'>
            <img src="assets/home/shild-icon.png" alt="" />
            <p className='text-center text-xl font-medium mt-3'>Reliable Protection</p>
            <p className='text-center text-[15px] mt-1'>Count on us for superior protection against wear, corrosion, and thermal breakdown, ensuring your vehicle stays resilient in all driving conditions.</p>
          </div>
        </div>
      </div>

      <div className=''>
        <h2 className='text-center text-3xl font-medium mb-5'>Who We Are</h2>

        <div className='flex flex-col md:flex-row justify-center items-center gap-36 max-w-[1300px] mx-auto my-0'>
          <div className='w-full px-5 md:w-[50%] flex flex-col items-center md:items-start'>
            <p className=' text-[15px] mt-1 mb-10'>Central Lubricants is a dynamic company built upon a foundation of unwavering core values that guide our every action and decision.

              At the heart of our operations lies a steadfast commitment to safety. We prioritize the well-being of our employees, customers, and communities above all else, ensuring that every aspect of our business is conducted with the highest standards of safety in mind.

              Furthermore, we firmly believe in treating our customers with fairness and respect, striving to make every interaction with us a seamless and positive experience. We are dedicated to simplifying the process of doing business with us, offering unparalleled customer service and support at every turn. </p>
            <a href="/about" className='bg-[#081ED1] px-5 py-3 text-white-100 font-medium rounded-md'>Find Out More</a>
          </div>
          <img className=' px-5 md:w-[40%] w-full' src="assets/Rectangle.png" alt="" />
        </div>

      </div>

      <div className='my-28 bg-[#353535] py-14 flex flex-col justify-center items-center'>
        <p className='text-center text-3xl  text-white-100 mb-10 mt-1'>We are marked by an extensive period of internationally <br /> recognized excellence</p>
        
        <div className='flex max-w-[1300px] mx-auto my-10 gap-20 flex-wrap justify-center'>
          <img src="assets/award1.png" alt="" className='mt-10'/>
          <img src="assets/award2.png" alt=""/>
          <img src="assets/award3.png" alt="" className='mt-10'/>
        </div>

      </div>

      <div>
        <div className='my-10'>
          <h2 className='text-center text-3xl font-medium'>Partners You May Recognize</h2>
          <p className='text-center text-md mt-5'>Explore our network of trusted collaborations with recognized names, bringing you valued partnerships <br /> that resonate with trust and reliability.</p>
        </div>
        <div className='flex flex-wrap justify-center md:justify-between items-center gap-20 mt-5 max-w-[1300px] mx-auto my-0'>
          <img className='w-[200px] h-auto' src="assets/Partners/CHEVRON.jpg" alt="" />
          <img className='w-[200px] h-auto' src="assets/Partners/DELTA.jpg" alt="" />
          <img className='w-[200px] h-auto' src="assets/Partners/EXXONMOBIL.png" alt="" />
          <img className='w-[200px] h-auto' src="assets/Partners/FOTEX.png" alt="" />
        </div>
      </div>

      <div className="relative w-fill mt-36 md:h-auto h-[30vh]">
        <img src="assets/smoothride.png" className='w-full h-[30vh] md:h-auto' alt="" />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white outlines w-full flex flex-col justify-center items-center">
          <h1 className="text-white-100 text-2xl md:text-4xl md:text-[55px] text-center justify-center slide-in flex flex-wrap mt-20">Want To Have a Smoother Travel?</h1>
          <a href="/contact" className='bg-[#FF0303] px-5 py-3 text-white-100 font-semibold rounded-md w-fit mt-16'>Get a Quota</a>
        </div>


      </div>

    </div>
  )
}

export default Home