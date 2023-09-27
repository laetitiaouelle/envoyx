import React from 'react'

function OurCommitment() {
  return (
    <div className='mt-[150px] transform -skew-y-3 ' >
      <div className='w-full h-[600px]  bg-[url("/assets/images/bg.jpg")] bg-fixed bg-no-repeat bg-cover relative font-lato ' >
      <div className=' absolute top-0 bottom-0 left-0 right-0 bg-[#000] bg-opacity-80 py-[25px] px-10  flex flex-col justify-center items-center' >
        <h1 className='text-4xl pb-5 font-lato text-center text-[#fff] transform skew-y-3' >{"Our Commitment"}</h1>
        <div className='text-[#B2C3B8] text-opacity-60 font-lato text-xl mx-10 max-w-[600px] text-center transform skew-y-3 ' >
          {"EnvoyX is committed to the financial well-being of clinics in Africa. We believe that every healthcare provider deserves timely payments for their services, and we're here to make that a reality."}
        </div>
        <div className='mt-20' ></div>
        <h1 className='text-4xl pb-5 font-lato text-center text-[#fff] transform skew-y-3' >{"About the Team"}</h1>
        <div className='text-[#B2C3B8] text-opacity-60 font-lato text-xl mx-10 max-w-[600px] text-center transform skew-y-3 ' >
          {"Behind EnvoyX is a team of passionate individuals with a shared vision of improving healthcare access in Africa."}
        </div>
      </div>
      </div>
    </div>
  )
}

export default OurCommitment
