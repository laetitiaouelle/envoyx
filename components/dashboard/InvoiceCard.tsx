import { motion } from 'framer-motion'
import React from 'react'
import {FiEye, FiEdit2, FiTrash} from 'react-icons/fi'

function InvoiceCard({invoice}:{invoice:any}) {
  return (
    <div className=' grid grid-cols-10  gap-2 h-16 border-b-[1px] border-text-light border-opacity-20 items-center justify-between' >
        <span className=' col-span-2 block text-text-dark-2 text-xs' > {invoice.clinic} </span>
        <span className='col-span-1 text-text-light text-xs' >{invoice.insurance}</span>
        <span className='col-span-2 text-text-dark-2 text-xs' >{invoice.patient_name}</span>
        <span className='col-span-1 text-text-light text-xs' >{invoice.date}</span>
        <span className='col-span-1 text-text-dark-2 text-xs' >{invoice.amount}</span>
        <span className={
            `col-span-1 
            ${
                invoice.status.toLowerCase() ==="in progress" && 'text-text-dark-2' ||
                invoice.status.toLowerCase() ==="validated" && 'text-main-green' ||
                invoice.status.toLowerCase() ==="refused" && 'text-main-red'
             } 
            text-xs`} >{invoice.status}</span>
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
  )
}

export default InvoiceCard