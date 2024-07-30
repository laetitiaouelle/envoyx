import React from 'react'
import { mastercard, medicine } from '../../constant/image'
import Image from 'next/image'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { HiMiniSignal } from 'react-icons/hi2'
import { MdOutlineNoTransfer } from 'react-icons/md'
import { LiaMoneyCheckSolid } from 'react-icons/lia'

function Home() {
  return (
    <div>
        <div className='w-full px-12 py-8 bg-white-one  mt-7 mb-6 rounded-xl z-10' >

            <div className='grid grid-cols-2' >
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className='col-span-1' >
                    <span className='block text-main-red font-bold text-[18px] mb-3' > {"Welcome back !"} </span>
                    <span className=' text-text-dark-2 text-xs ' > {"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam error ipsum voluptatum dolorum temporibus ex saepe."}</span>
                </motion.div>
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className='col-span-1 relative' >
                    <div className='relative  flex items-center justify-center w-full h-full' >
                        <Image src={medicine} width={300} alt='svg1' className='absolute z-50 ' />
                    </div>
                </motion.div>
            </div>

        </div>
        <div className='grid grid-cols-12 mt-12' >
            <div className='col-span-4 pr-10 ' >
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
                <div className='bg-[#fff] rounded-xl py-5 px-4 '>
                    <div className='flex items-center justify-between mb-4' >
                        <h1 className='text-text-dark-2 text-sm font-bold'>{"Wallet"}</h1>
                    </div>
                    <div className= ' shadow-md bg-white-one border border-opacity-10 border-text-light rounded-md w-full h-[150px] px-3 py-2 flex flex-col justify-between '>
                        <div>
                            <div className='flex items-center justify-between'>
                                <span className='text-xs text-text-dark-2 ' >Current Balance</span>
                                <span className='' > <HiMiniSignal size={24} color='#9598d6' /> </span>
                            </div>
                            <div className='mt-2 text-xl text-text-dark' >
                                $3.000.000
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-3'>
                                <span className='text-xs text-text-dark-2 uppercase' >Clinic Name</span>
                                <span className='text-sm text-text-dark-2 uppercase font-bold' > 26/07 </span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='text-sm text-text-dark-2 uppercase font-bold block' > 1234 1234 1234 1234 </span>
                                <span className='relative w-[2rem] h-[1.5rem] flex items-center justify-between' >
                                    <Image src={mastercard} width={30} alt='svg1' className='absolute ' />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4' >
                        <div className='flex items-center justify-between'>
                            <span className='text-xs text-text-dark-2 ' >Total Transaction</span>
                            <span className='' > <LiaMoneyCheckSolid size={24} color='#9598d6' /> </span>
                        </div>
                        <div className='mt-2 text-xl text-text-dark' >
                            $10.000.000
                        </div>
                        <div className='flex items-center justify-end mt-4' >
                            <div className='flex items-end gap-2' >
                                <h1 className='text-text-light text-[10px] font-bold'>{"More"}</h1>
                                <BsArrowRight color='#9797bb' />
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className='col-span-8 ' >
                <div className=' bg-[#fff] rounded-xl py-5 px-4 ' >
                    <div className='flex items-center justify-between mb-4' >
                        <h1 className='text-text-dark-2 text-sm font-bold'>{"Recent transaction"}</h1>
                        <div className='flex items-center gap-2' >
                            <h1 className='text-text-light text-[10px] font-bold'>{"More"}</h1>
                            <BsArrowRight color='#9797bb' />
                        </div>
                    </div>
                    <ul>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Salary Payment"} - <span className='text-text-light text-xs' >{"user 0011"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"250.000 fcfa"} - <span className='text-text-light text-xs' >{"November"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[25%] bg-main-red rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-red' >{"25%"}</span>
                            </div>
                        </li>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Cash Advance"} - <span className='text-text-light text-xs' >{"ENOYX"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[45%] bg-main-blue rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-blue' >{"45%"}</span>
                            </div>
                        </li>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Cash Advance"} - <span className='text-text-light text-xs' >{"ENOYX"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[95%] bg-main-blue rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-blue' >{"95%"}</span>
                            </div>
                        </li>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Salary Payment"} - <span className='text-text-light text-xs' >{"user 0011"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"250.000 fcfa"} - <span className='text-text-light text-xs' >{"November"}</span> </span>                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[15%] bg-main-red rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-red' >{"15%"}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Home