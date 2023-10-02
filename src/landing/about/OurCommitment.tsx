import React from 'react'

function OurCommitment() {
  return (
    <div className=' mt-[50px] lg:mt-[150px] transform !-skew-y-3 ' >
      <div className='w-full h-[700px] sm:h-[600px]  bg-[url("/assets/images/bg.jpg")] bg-fixed bg-no-repeat bg-cover relative font-lato ' >
      <div className=' absolute top-0 bottom-0 left-0 right-0 bg-[#000] bg-opacity-80 py-[25px] px-10  flex flex-col justify-center items-center' >
        <h1 className=' text-3xl sm:text-4xl pb-5 font-lato text-center text-[#fff] transform !skew-y-3' data-aos="fade-up" data-aos-duration="1000" >{"Our Commitment"}</h1>
        <div className='text-[#B2C3B8] text-opacity-60 font-lato text-lg sm:text-xl sm:mx-10 sm:max-w-[600px] text-center transform !skew-y-3 ' data-aos="fade-up" data-aos-duration="1000" >
          {"EnvoyX is committed to the financial well-being of clinics in Africa. We believe that every healthcare provider deserves timely payments for their services, and we're here to make that a reality."}
        </div>
        <div className='mt-20' ></div>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-3xl sm:text-4xl pb-5 font-lato text-center text-[#fff] transform !skew-y-3' >{"About the Team"}</h1>
        <div data-aos="fade-up" data-aos-duration="1000" className='text-[#B2C3B8] text-opacity-60 font-lato text-lg sm:text-xl sm:mx-10 max-w-[600px] text-center transform !skew-y-3 ' >
          {"Behind EnvoyX is a team of passionate individuals with a shared vision of improving healthcare access in Africa."}
        </div>
      </div>
      </div>
    </div>
  )
}

export default OurCommitment
