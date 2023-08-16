import React from 'react'
import InvoiceCard from '../../../components/dashboard/InvoiceCard'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'

function Invoices() {

    const invoices = [
        {
            id: '',
            clinic:'Clinic ab',
            insurance:'ASCOMA',
            patient_name: 'Loba marie-ange',
            date: '12-07-2023',
            amount: '5600 Fr cfa',
            status: 'In progress',
            actions: '',
        },
        {
            id: '',
            clinic:'Clinic pd',
            insurance:'ASCOMA',
            patient_name: 'Kouakou anicet',
            date: '12-07-2023',
            amount: '7600 Fr cfa',
            status: 'Validated',
            actions: '',
        },
        {
            id: '',
            clinic:'Clinic fgs',
            insurance:'ASCOMA',
            patient_name: 'Kanga Louis',
            date: '12-07-2023',
            amount: '11600 Fr cfa',
            status: 'Refused',
            actions: '',
        },
        {
            id: '',
            clinic:'Clinic ab',
            insurance:'ASCOMA',
            patient_name: 'Erine liam',
            date: '12-07-2023',
            amount: '10200 Fr cfa',
            status: 'Validated',
            actions: '',
        },
        {
            id: '',
            clinic:'Clinic ab',
            insurance:'ASCOMA',
            patient_name: 'Henri Doe',
            date: '12-07-2023',
            amount: '3000 Fr cfa',
            status: 'In progress',
            actions: '',
        },
    ]

  return (
    <div className='mt-10' >
        <div className='mb-4 w-full flex justify-end'>
            <motion.a initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='text-[#fff] font-semibold bg-main-blue w-[200px] h-10 flex items-center justify-center rounded-[10px] cursor-pointer text-xs ' >
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
                <div className='col-span-2 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Clinic"}</div>
                <div className='col-span-1 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Insurance"}</div>
                <div className='col-span-2 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Patient"}</div>
                <div className='col-span-1 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Date"}</div>
                <div className='col-span-1 text-text-light text-sm font-medium border-r border-text-light border-opacity-20' >{"Amount"}</div>
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
        <div className='mt-4 w-full flex item-center justify-end'>
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
  )
}

export default Invoices