import React from 'react'
import Image from 'next/image'
import {PiExcludeFill} from 'react-icons/pi'


function Services() {
  return (
    <>

      <h1 data-aos="fade-up" data-aos-duration="1000" className=' text-4xl lg:text-5xl pb-5 font-lato text-center text-text-dark lg:pt-[100px] sm:pt-[70px] pt-[50px] ' >{"Our Services"}</h1>
      <div className='grid grid-cols-2 lg:py-[100px] sm:py-[70px] pt-[50px] lg:gap-0 gap-10 pb-10 lg:pb-0' >
          <div data-aos="fade-up" data-aos-duration="1500" className=' col-span-2 lg:col-span-1 mx-10' >
              <div className='bg-[#f5f5f7] rounded-lg relative h-[400px] sm:h-[600px] flex items-center justify-center ' >
                  <Image src={"/assets/images/illustration3.png"} width={400} height={500} alt='ill3' />
              </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className='col-span-2 lg:col-span-1 flex flex-col  justify-center gap-10' >
              <div className='text-text-dark text-opacity-60 font-lato text-xl mx-10' >
                <div className='flex items-center gap-1' >
                  <span><PiExcludeFill color='#ff808b' /></span>
                  <span className='text-text-dark lg:text-base text-2xl block ' >{"Description:"}</span>
                </div>
                <div className='ml-3 mt-3 text-lg sm:text-lg'>
                  {"EnvoyX offers hassle-free cash advances to clinics, helping them bridge the gap between providing essential healthcare services and receiving payments."}
                </div>
              </div>
              <div className='text-text-dark text-opacity-60 font-lato text-xl mx-10' >
                <div className='flex items-center gap-1' >
                  <span><PiExcludeFill color='#ff808b' /></span>
                  <span className='text-text-dark lg:text-base text-2xl block' >{"Features:"}</span>
                </div>
                <div className='ml-3 mt-3 text-lg sm:text-lg'>
                  {"Our simple application process, competitive rates, and flexible repayment options make us the preferred choice for clinics."}
                </div>
              </div>
              <div className='mx-10 mt-10' >
                <a className=' w-[130px] h-10 flex items-center justify-center bg-white-one rounded-sm border-text-dark border-[0.5px] ' >
                    <span className='block text-text-dark  font-lato' >{"Learn More"}</span>
                </a>
              </div>
          </div>
      </div>
      <div className='grid grid-cols-2 lg:gap-0 gap-10' >
        <div data-aos="fade-up" data-aos-duration="1000" className='col-span-2 order-2 lg:order-1 lg:col-span-1 flex flex-col justify-center gap-10 ' >
          <div className='text-text-dark text-opacity-60 font-lato text-xl mx-10' >
            <div className='flex items-center gap-1' >
              <span><PiExcludeFill color='#ff808b' /></span>
              <span className='text-text-dark  lg:text-base text-2xl block' >{"Benefits:"}</span>
            </div>
            <div className='ml-3 mt-3 text-lg sm:text-lg'>
              {"Discover how our cash advances can stabilize your clinic's finances and allow you to focus on what matters - patient care."}
            </div>
          </div>
          <div className='text-text-dark text-opacity-60 font-lato text-xl mx-10' >
            <div className='flex items-center gap-1' >
              <span><PiExcludeFill color='#ff808b' /></span>
              <span className='text-text-dark lg:text-base text-2xl block' >{"Apply Now:"}</span>
            </div>
            <div className='ml-3 mt-3 text-lg sm:text-lg'>
              {"Take the first step towards financial stability for your clinic."}
            </div>
          </div>
          <div className='mx-10 mt-10' >
            <a className=' w-[130px] h-10 flex items-center justify-center bg-white-one rounded-sm border-text-dark border-[0.5px] ' >
                <span className='block text-text-dark  font-lato' >{"Learn More"}</span>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className='col-span-2 lg:col-span-1 lg:order-2 mx-10 order-1' >
          <div className='bg-[#f5f5f7] rounded-lg relative h-[400px] sm:h-[600px] flex items-center justify-center ' >
              <Image src={"/assets/images/illustration4.png"} width={400} height={500} alt='ill3' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services