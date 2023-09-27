import Image from 'next/image'
import React from 'react'

function AboutEnvoyX() {
  return (
    <div className=' bg-text-dark bg-opacity-90 grid grid-cols-10 transform skew-y-3'>
      <div className='col-span-7 flex flex-col items-center justify-center py-[70px] px-[100px] transform -skew-y-3' >
        <h1 className='text-5xl pb-5 font-lato text-center ' >{"Discover How We Can Help Clinics Thrive"}</h1>
        <div className='text-[#B2C3B8] max-w-[600px] text-center font-lato ' >
            {"EnvoyX was founded with a clear purpose - to bridge the financial gap for healthcare providers in Africa. Our journey began when the founder Loubao Kraka witnessed the struggle clinics face due to unpaid invoices, and we made it our mission to find a solution."}
        </div>
      </div>
      <div className=' transform -skew-y-3 rotate-3 col-span-3 relative h-[600px]   ' >
        <div className='  absolute w-full h-full bg-[url("/assets/images/illustration1.png")] bg-no-repeat bg-cover bg-[right_bottom_-100px]'>
        </div>
      </div>
    </div>
  )
}

export default AboutEnvoyX