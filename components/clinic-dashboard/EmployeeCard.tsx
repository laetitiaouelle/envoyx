import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import {FiEdit2, FiTrash} from 'react-icons/fi'
import { mastercard, orange, wave } from '../../src/constant/image'

function EmployeeCard({invoice}:{invoice:any}) {
   const [isOpen, setIsOpen] = useState(false)

  return (
   <>
      <div onClick={()=>setIsOpen(true)} className=' grid grid-cols-10  gap-2 h-16 border-b-[1px] border-text-light border-opacity-20 items-center justify-between cursor-pointer' >
         <span className=' col-span-3 block text-text-dark-2 text-sm' > {invoice.clinic} </span>
         <span className='col-span-1 text-text-light text-xs uppercase' >{invoice.insurance}</span>
         <span className='col-span-2 text-text-dark-2 text-base' >{invoice.amount}</span>
         <div className='col-span-4 text-text-dark-2 text-xs flex items-center justify-start gap-4'>
               <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='flex items-center justify-center rounded-sm '  onClick={()=>null} type='button'>
                 <span className='relative w-[4rem] h-[3rem] ' >
                    <Image src={mastercard} alt='mastercard' width={50} className='absolute'  />
                 </span>
               </motion.button>
               <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='flex items-center justify-center rounded-sm '  onClick={()=>null} type='button'>
                 <span className='relative w-[4rem] h-[3rem] ' >
                    <Image src={wave} alt='mastercard' width={50} className='absolute'  />
                 </span>
               </motion.button>
               <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='flex items-center justify-center rounded-sm '  onClick={()=>null} type='button'>
                 <span className='relative w-[4rem] h-[3rem] ' >
                    <Image src={orange} alt='mastercard' width={50} className='absolute'  />
                 </span>
               </motion.button>
               
         </div>
      </div>
    </>
  )
}

export default EmployeeCard