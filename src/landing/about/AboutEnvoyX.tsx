import Image from 'next/image'
import React from 'react'

function AboutEnvoyX() {
  return (
    <div className=' bg-text-dark bg-opacity-90 grid grid-cols-10 transform !skew-y-3'>
      <div data-aos="fade-up" data-aos-duration="1500" className=' col-span-10 lg:col-span-7 flex flex-col items-center justify-center py-[70px] px-10 sm:px-[100px] transform !-skew-y-3' >
        <h1 className='  text-3xl sm:text-4xl lg:text-5xl pb-5 font-lato text-center ' >{"Discover How We Can Help Clinics Thrive"}</h1>
        <div className='text-[#B2C3B8] max-w-[600px] text-center font-lato ' >
            {"EnvoyX was founded with a clear purpose - to bridge the financial gap for healthcare providers in Africa. Our journey began when the founder Loubao Kraka witnessed the struggle clinics face due to unpaid invoices, and we made it our mission to find a solution."}
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className=' hidden lg:block transform !-skew-y-3 rotate-3 col-span-3 relative h-[400px] lg:h-[600px] mr-10  ' >
        <div className='  absolute w-full h-full bg-[url("/assets/images/illustration1.png")] bg-no-repeat bg-cover bg-[right_bottom_-100px]'>
        </div>
      </div>
    </div>
  )
}

export default AboutEnvoyX