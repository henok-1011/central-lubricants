import React, { useEffect, useState } from 'react'
import '../style.css';
import { QUERY_Home, graphcms } from '../Graphql/Queries';
import ReactLoading from 'react-loading';


function Home() {
  const [Home, setHome] = useState();
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);



  useEffect(() => {
    graphcms.request(QUERY_Home)
      .then(data => {
        console.log(data); // Log the fetched data to inspect its structure
        setHome(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    if (Home && Home.heroSections && Home.heroSections.length > 0) {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === Home.heroSections?.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }
  }, []);
  
  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen text-secondary-100'>
        <ReactLoading type="spinningBubbles" color='rgb(228 157 91)' height={'200px'} width={'200px'} />
      </div>)
  }

  return (
    <div>
      
        <div className="relative w-fill overflow-hidden h-[80vh]">
          <img src={Home.heroSections[currentSlide].backgroundPicture.url} className='w-full h-[100vh]' alt="" />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-[85%] md:top-[50%] px-5 md:px-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white outlines w-full flex flex-col md:flex-row h-[100vh]  items-center max-w-[1300px] mx-auto my-0">
          <div>
              <h1 className="text-white-100 text-4xl md:text-[40px] pl-5 text-start leading-[50px] justify-center slide-in flex flex-wrap mb-10">{Home.heroSections[currentSlide].frontText.text}</h1>
          </div>
            <img className='hidden md:inline' src={Home.heroSections[currentSlide].frontpicture.url} alt="" />
        </div>

      </div>
      
      <div className='max-w-[1000px] mx-auto my-0 mt-1'>
        <marquee behavior="" direction="" className="text-[#081ED1] font-semibold text-3xl">{Home.homePageNotices[0].notice.text?.length == 0 ?"": Home.homePageNotices[0].notice.text}</marquee>

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
          <img className=' px-5 md:w-[40%] w-full' src={Home.whoWeAreImages[0].picture.url} alt="" />
        </div>

      </div>

      <div className='my-28 bg-[#353535] py-14 flex flex-col justify-center items-center'>
        <p className='text-center text-3xl  text-white-100 mb-10 mt-1'>We are marked by an extensive period of internationally <br /> recognized excellence</p>

        {/* <marquee behavior="scroll" direction="left" scrollamount="25" className="w-full flex"> */}
        <div className='max-w-[1300px] mx-auto my-0 '>
          <div className="marquee-container flex ml-7">

            <div className="marquee flex ">
              <img src="assets/award1.png" alt="" className='mt-10 ml-6' />
              <img src="assets/award2.png" alt="" className='mt-10 ml-6'/>
              <img src="assets/award3.png" alt="" className='mt-10 ml-6' />       </div>
          </div>
        </div>
        {/* </marquee> */}

      </div>

      <div>
        <div className='my-10'>
          <h2 className='text-center text-3xl font-medium'>Partners You May Recognize</h2>
          <p className='text-center text-md mt-5'>Explore our network of trusted collaborations with recognized names, bringing you valued partnerships <br /> that resonate with trust and reliability.</p>
        </div>

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