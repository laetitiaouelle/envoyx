import React from 'react'
import Image from 'next/image'
import {PiExcludeFill} from 'react-icons/pi'


function Services() {
  return (
    <>

      <h1 className='text-5xl pb-5 font-lato text-center text-text-dark pt-[100px]' >{"Our Services"}</h1>
      <div className='grid grid-cols-2 py-[100px]' >
          <div className='col-span-1 mx-10' >
              <div className='bg-[#f5f5f7] rounded-lg relative h-[600px] flex items-center justify-center ' >
                  <Image src={"/assets/images/illustration3.png"} width={400} height={500} alt='ill3' />
              </div>
          </div>
          <div className='col-span-1 flex flex-col  justify-center gap-10' >
              <div className='text-text-dark text-opacity-60 font-lato text-xl mx-10' >
                <div className='flex items-center gap-1' >
                  <span><PiExcludeFill color='#ff808b' /></span>
                  <span className='text-text-dark ' >{"Description:"}</span>
                </div>
                <div className='ml-3 mt-3 text-lg'>
                  {"EnvoyX offers hassle-free cash advances to clinics, helping them bridge the gap between providing essential healthcare services and receiving payments."}
                </div>
              </div>
              <div className='text-text-dark text-opacity-60 font-lato text-xl mx-10' >
                <div className='flex items-center gap-1' >
                  <span><PiExcludeFill color='#ff808b' /></span>
                  <span className='text-text-dark ' >{"Features:"}</span>
                </div>
                <div className='ml-3 mt-3 text-lg'>
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
      <div className='grid grid-cols-2' >
        <div className='col-span-1 flex flex-col justify-center gap-10' >
          <div className='text-text-dark text-opacity-60 font-lato text-xl mx-10' >
            <div className='flex items-center gap-1' >
              <span><PiExcludeFill color='#ff808b' /></span>
              <span className='text-text-dark ' >{"Benefits:"}</span>
            </div>
            <div className='ml-3 mt-3 text-lg'>
              {"Discover how our cash advances can stabilize your clinic's finances and allow you to focus on what matters - patient care."}
            </div>
          </div>
          <div className='text-text-dark text-opacity-60 font-lato text-xl mx-10' >
            <div className='flex items-center gap-1' >
              <span><PiExcludeFill color='#ff808b' /></span>
              <span className='text-text-dark ' >{"Apply Now:"}</span>
            </div>
            <div className='ml-3 mt-3 text-lg'>
              {"Take the first step towards financial stability for your clinic."}
            </div>
          </div>
          <div className='mx-10 mt-10' >
            <a className=' w-[130px] h-10 flex items-center justify-center bg-white-one rounded-sm border-text-dark border-[0.5px] ' >
                <span className='block text-text-dark  font-lato' >{"Learn More"}</span>
            </a>
          </div>
        </div>
        <div className='col-span-1 mx-10' >
          <div className='bg-[#f5f5f7] rounded-lg relative h-[600px] flex items-center justify-center ' >
              <Image src={"/assets/images/illustration4.png"} width={400} height={500} alt='ill3' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services