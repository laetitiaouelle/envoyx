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
            {/* {
                invoices.map((invoice, index)=>
                    (
                    <motion.div  key={index} initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:0.3*(index+1)}}>
                        <InvoiceCard invoice={invoice}/>
                    </motion.div>
                    )
                )
            } */}

                    <ul>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Cash Advance"} - <span className='text-text-light text-xs' >{"ENOYX"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"Invoice N°"} - <span className='text-text-light text-xs' >{"000152256"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"Invoice Total"} - <span className='text-text-light text-xs font-bold' >{"2.000.000"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"250.000 fcfa solde"} - <span className='text-text-light text-xs' >{"on november"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[25%] bg-main-red rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-red' >{"25%"}</span>
                            </div>
                        </li>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Cash Advance"} - <span className='text-text-light text-xs' >{"ENOYX"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"Invoice N°"} - <span className='text-text-light text-xs' >{"0001092256"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"Invoice Total"} - <span className='text-text-light text-xs font-bold' >{"1.000.000"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"400.000 fcfa solde"} - <span className='text-text-light text-xs' >{"on july"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[45%] bg-main-blue rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-blue' >{"45%"}</span>
                            </div>
                        </li>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Cash Advance"} - <span className='text-text-light text-xs' >{"ENOYX"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"Invoice N°"} - <span className='text-text-light text-xs' >{"000152256"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"Invoice Total"} - <span className='text-text-light text-xs font-bold' >{"2.000.000"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"1.900.000 fcfa solde"} - <span className='text-text-light text-xs' >{"on January"}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[95%] bg-main-blue rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-main-blue' >{"95%"}</span>
                            </div>
                        </li>
                        <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                            <span className='block text-text-dark text-xs' > {"Cash Advance"} - <span className='text-text-light text-xs' >{"ENOYX"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"Invoice N°"} - <span className='text-text-light text-xs' >{"000152256"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"Invoice Total"} - <span className='text-text-light text-xs font-bold' >{"3.000.000"}</span> </span>
                            <span className='block text-text-dark text-xs' > {"00.000 fcfa solde"} - <span className='text-text-light text-xs' >{"waiting..."}</span> </span>
                            <div className='flex items-center gap-3 ' >
                                <span className='block h-[4px] rounded-full bg-text-light bg-opacity-30 w-[80px]' >
                                    <span className='block h-full w-[15%]  rounded-full' ></span>
                                </span>
                                <span className='block font-bold text-[12px] text-text-light' >{"0%"}</span>
                            </div>
                        </li>
                    </ul>
           
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