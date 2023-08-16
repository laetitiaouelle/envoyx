import Image from 'next/image'
import React from 'react'
import { img1 } from '../../src/constant/image'
import { IoMdCall, IoIosLocate, IoIosMail, IoIosLink } from 'react-icons/io'
import { FiEye, FiEdit2, FiTrash } from 'react-icons/fi'
import { motion } from 'framer-motion'

function ClinicCard({clinic}:{clinic: any}) {
  return (
    <div className='col-span-1 w-full h-full bg-[#fff] rounded-[10px] px-4 py-3 '>
        <div className='relative w-full h-24 ' >
            <Image src={img1} objectFit='cover' fill alt={clinic.name} className='absolute' />
        </div>
        <div className='mt-4' >


            <div>
                <div className='flex items-center justify-between mb-4'>
                    <h1 className='text-text-dark-2 text-sm font-medium '>{"Clinic infos"}</h1>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-text-light text-[10px] font-bold'>...</h1>
                    </div>
                </div>
            </div>
        
            <div className='ml-2' >
              <div className='flex items-center justify-between' >
                <span className='block text-text-dark-2 text-sm font-light' >
                  {clinic.name}
                </span>
                <span className='flex items-center gap-2 text-text-light text-[10px]' >
                  <IoMdCall size={11} color='' />
                  {clinic.phone}
                </span>
              </div>
              <div className='mt-2 flex items-center justify-between' >
                <span className='block text-main-red text-xs font-light' >{clinic.location}</span>
                <span className='flex items-center gap-2 text-text-light text-[10px]' >
                  <IoIosLocate size={11} color='' />
                  {clinic.address}
                </span>
              </div>
              <div className='mt-3 ' >
                <span className='flex items-center gap-2 text-text-dark-2 text-sm mb-2 font-light' >
                  <IoIosMail size={16} color='' />
                  {clinic.email}
                </span>
                <span className='flex items-center gap-2 text-main-purple text-sm font-light' >
                  <IoIosLink size={16} color='' />
                  {clinic.website}
                </span>
              </div>
            </div>



            <div className='mt-5' >
                <div className='flex items-center justify-between mb-4'>
                    <h1 className='text-text-dark-2 text-sm font-medium '> {"Insurances"} </h1>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-text-light text-[10px] font-bold'> {"..."} </h1>
                    </div>
                </div>
            </div>


          <div className='flex items-center gap-2' >
            <span className='px-3 py-2 text-main-purple bg-main-purple bg-opacity-10 text-[10px] rounded-[7px] ' > {"ASCOMA"} </span>
            <span className='px-3 py-2 text-main-purple bg-main-purple bg-opacity-10 text-[10px] rounded-[7px] ' > {"MUGEFCI"} </span>
            <span className='px-3 py-2 text-main-purple bg-main-purple bg-opacity-10 text-[10px] rounded-[7px] ' >  {"CIGNA"} </span>
            <span className='px-3 py-2 text-main-purple bg-main-purple bg-opacity-10 text-[10px] rounded-[7px] ' > {"BIL ASSURANCE"} </span>
          </div>

          <div className='my-6' ></div>

          <div className='col-span-2 text-text-dark-2 text-xs flex items-center justify-evenly' >
             <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='h-5 flex items-center w-8 justify-center rounded-sm bg-main-blue bg-opacity-5'  onClick={()=>null} type='button'>
                <FiEye size={13} color='#5e81f4' />
             </motion.button>
             <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='h-5 flex items-center w-8 justify-center rounded-sm bg-main-green bg-opacity-5'  onClick={()=>null} type='button'>
                <FiEdit2 size={13} color='#04a640' />
             </motion.button>
             <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='h-5 flex items-center w-8 justify-center rounded-sm bg-main-red bg-opacity-5'  onClick={()=>null} type='button'>
                <FiTrash size={13} color='#ff808b' />
             </motion.button>
          </div>

        </div>
    </div>
  )
}

export default ClinicCard