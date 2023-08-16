import React from 'react'
import { svg2 } from '../../constant/image'
import Image from 'next/image'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'
import Example from './action/charts/Linear'
import MyChart from '../../../components/MyLineChart'

function Home() {
  return (
    <div>
        <div className='w-full px-12 py-8 bg-main-red bg-opacity-[0.15] mt-7 mb-6 rounded-xl' >

            <div className='grid grid-cols-2' >
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className='col-span-1' >
                    <span className='block text-main-red font-bold text-[18px] mb-3' > {"Welcome back Loubao !"} </span>
                    <span className=' text-text-dark-2 text-xs ' > {"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam error ipsum voluptatum dolorum temporibus ex saepe."}</span>
                </motion.div>
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className='col-span-1 relative' >
                    <div className='relative  flex items-center justify-center w-full h-full' >
                        <Image src={svg2} width={300} alt='svg1' className='absolute ' />
                    </div>
                </motion.div>
            </div>

        </div>
        <div className='grid grid-cols-10 mt-12' >
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className='col-span-3' >
                <div className=' bg-[#fff] rounded-xl py-5 px-4 ' >
                    <div className='flex items-center justify-between mb-4' >
                        <h1 className='text-text-dark-2 text-sm font-bold'>{"Recent invoices"}</h1>
                        <div className='flex items-center gap-2' >
                            <h1 className='text-text-light text-[10px] font-bold'>{"More"}</h1>
                            <BsArrowRight color='#9797bb' />
                        </div>
                    </div>
                    <ul>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Clinique ab"} - <span className='text-text-light text-xs' >{"ASCOMA"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[25%] bg-main-red rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-red' >{"25%"}</span>
                            </div>
                        </li>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Clinique sb"} - <span className='text-text-light text-xs' >{"ASCOMA"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[45%] bg-main-blue rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-blue' >{"45%"}</span>
                            </div>
                        </li>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Clinique zc"} - <span className='text-text-light text-xs' >{"ASCOMA"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[95%] bg-main-blue rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-blue' >{"95%"}</span>
                            </div>
                        </li>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Clinique pf"} - <span className='text-text-light text-xs' >{"ASCOMA"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[15%] bg-main-red rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-red' >{"15%"}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <div className='col-span-7 pl-10' >
                    <MyChart/>
            </div>
        </div>
    </div>
  )
}

export default Home