import React, { useState } from 'react'
import InvoiceCard from '../../../components/dashboard/InvoiceCard'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'
import DialogBox from '../../../components/dashboard/Dialog'
import CreateInvoice from './action/CreateInvoice'

function Invoices() {

    const invoices = [
        {
            id: '',
            clinic:'Clinic ab',
            insurance:'ASCOMA',
            director_name: 'Loba marie-ange',
            date: '12-07-2023',
            amount: '5 600 000',
            status: 'In progress',
            actions: '',
        },
        {
            id: '',
            clinic:'Clinic pd',
            insurance:'ASCOMA',
            director_name: 'Kouakou anicet',
            date: '12-07-2023',
            amount: '7 600 000',
            status: 'Validated',
            actions: '',
        },
        {
            id: '',
            clinic:'Clinic fgs',
            insurance:'ASCOMA',
            director_name: 'Kanga Louis',
            date: '12-07-2023',
            amount: '1 160 000',
            status: 'Refused',
            actions: '',
        },
        {
            id: '',
            clinic:'Clinic ab',
            insurance:'ASCOMA',
            director_name: 'Erine liam',
            date: '12-07-2023',
            amount: '10 200 000',
            status: 'Validated',
            actions: '',
        },
        {
            id: '',
            clinic:'Clinic ab',
            insurance:'ASCOMA',
            director_name: 'Henri Doe',
            date: '12-07-2023',
            amount: '3 000 000',
            status: 'In progress',
            actions: '',
        },
    ]
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='mt-10' >
        <div className='mb-4 w-full flex justify-end'> 
            <motion.a onClick={()=>setIsOpen(true)} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='text-[#fff] font-semibold bg-main-blue w-[200px] h-10 flex items-center justify-center rounded-[10px] cursor-pointer text-xs ' >
                {"Add a new invoice"}
            </motion.a>
        </div>
        <div>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-text-dark-2 text-sm font-bold'>{"Invoices list"}</h1>
                <div className='flex items-center gap-2'>
                    <h1 className='text-text-light text-[10px] font-bold'>{"..."}</h1>
                </div>
            </div>
        </div>
        <div className='bg-[#fff] px-4 py-6 rounded-[10px]  ' >
            <div className='grid grid-cols-10 mb-2 gap-2' >
                <div className='col-span-3 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Clinic"}</div>
                <div className='col-span-1 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Insurance"}</div>
                <div className='col-span-1 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Date"}</div>
                <div className='col-span-2 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Amount "} <span className='font-medium text-xs text-secondary-purple ' >/ Fr cfa</span></div>
                <div className='col-span-1 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Status"}</div>
                <div className='col-span-2 text-text-light text-sm font-medium ' >{"Actions"}</div>
            </div>
            {
                invoices.map((invoice, index)=>
                    (
                    <motion.div  key={index} initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:0.3*(index+1)}}>
                        <InvoiceCard invoice={invoice}/>
                    </motion.div>
                    )
                )
            }
           
        </div>
        <div className='mt-4 w-full flex items-center justify-between'>
            <div>
                <div className=' border border-main-blue border-opacity-10 bg-white-one rounded-md px-2 py-1 ' >
                    <input type='text' placeholder='Recherche' className=' border-none bg-white-one bg-opacity-0 px-2 outline-none w-[18rem] text-text-dark-2 placeholder:text-xs text-xs ' />
                </div>
            </div>
            <div className='flex item-center justify-between' >
                <span className='mr-2 cursor-pointer'>
                    <BsArrowLeft color='#9797bb' />
                </span>
                <span className='block text-text-dark-2 mr-1 text-sm' >{"1"}</span>
                <span className='block text-text-light mr-2 text-sm '>{"/ 5"}</span>
                <span className='cursor-pointer'>
                    <BsArrowRight color='#9797bb' />
                </span>
            </div>
        </div>
        <AnimatePresence>
            {
            isOpen && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} exit={{opacity:0}} >
                    <DialogBox showDialog={() => setIsOpen(!isOpen)} title={'Create invoice'}>
                        <CreateInvoice/>
                    </DialogBox>
                </motion.div>
            )
            }
        </AnimatePresence>
    </div>
  )
}

export default Invoices