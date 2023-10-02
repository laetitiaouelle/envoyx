import React from 'react'
import { CiSliderHorizontal } from 'react-icons/ci'

function Hero() {
  return (
    <div className='w-full h-screen bg-[url("/assets/images/bg.jpg")] bg-no-repeat bg-cover relative font-lato transform !-skew-y-3 -translate-y-10 ' >
        <div className=' absolute top-0 bottom-0 left-0 right-0 bg-[#000] bg-opacity-80 py-[25px] px-10 ' >
            <nav className='flex items-center justify-between transform !skew-y-3 pt-10 ' >
                <div>
                    <span className='block font-bold text-xl text-[#fff] font-lato ' data-aos="zoom-in" data-aos-duration="1000" > {"EnvoyX"} </span>
                </div>
                <div>
                    <ul className='sm:flex flex-row gap-[30px] hidden data-aos="zoom-in" data-aos-duration="1000"' >
                        <li className='flex flex-row gap-[30px] font-lato' ><a href='#'>{"Home"}</a> <span>.</span> </li>
                        <li className='flex flex-row gap-[30px] font-lato' ><a href='#'>{"About Us"} <span>.</span></a></li>
                        <li className='flex flex-row gap-[30px] font-lato' ><a href='#'>{"Our Services"}</a> <span>.</span></li>
                        <li className='font-lato' ><a href='#'>{"Contact Us"}</a></li>
                    </ul>
                </div>
                <div>
                    <span><CiSliderHorizontal data-aos="zoom-in" data-aos-duration="1000" size={30} /></span>
                </div>
            </nav>
            <div className='flex flex-col h-full flex-1 justify-center items-center transform !skew-y-3 ' data-aos="zoom-in" data-aos-duration="1000" >
                <div className=' border-[0.6px] border-[#fff] rounded-full px-3 py-1 text-xs font-light gradA font-lato' >{"Announcing Our Beta Product"}</div>
                <div className='py-[30px] max-w-[765px] ' >
                    <h1 className=' font-lato text-3xl sm:text-5xl md:text-6xl  text-center sm:leading-[70px] leading-[40px] [word-spacing:5px] sm:[word-spacing:10px] tracking-[0.020rem] ' >
                        {"Welcome to EnvoyX, Your Partner in Financial Health for Clinics in Africa"}
                    </h1>
                </div>
                <div className=' max-w-[300px] sm:max-w-[765px]' >
                    <span className=' block text-[#B2C3B8]  sm:mx-14 text-center font-lato ' >
                        {"We provide a lifeline to clinics by offering cash advances for unpaid invoices, ensuring that healthcare providers can continue their vital work."}
                    </span>
                </div>
                <div className='max-w-[765px] mt-[30px] flex items-center gap-4' >
                    <a className=' w-[130px] h-10 flex items-center justify-center bg-white-one rounded-sm ' >
                        <span className='block text-text-dark font-lato' >{"Get Started"}</span>
                    </a>
                    <a className=' w-[130px] h-10 flex items-center justify-center bg-text-dark border-[0.5px] border-[#fff] rounded-sm ' >
                        <span className='block text-white-one font-lato' >{"Try It"}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero