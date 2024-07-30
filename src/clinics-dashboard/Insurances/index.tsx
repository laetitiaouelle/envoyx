import { motion } from 'framer-motion'
import React from 'react'
import { mastercard, medicine } from '../../constant/image'
import Image from 'next/image'
import { LiaMoneyCheckSolid } from 'react-icons/lia'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { HiMiniSignal } from 'react-icons/hi2'
import EmployeeCard from '../../../components/clinic-dashboard/EmployeeCard'

function Insurances() {
    const invoices = [
        {
            id: '',
            clinic:'Linn Assi',
            insurance:'Docteur',
            director_name: 'Loba marie-ange',
            date: '12-07-2023',
            amount: '600 000',
            status: 'In progress',
            actions: '',
        },
        {
            id: '',
            clinic:'Eric Aur Pedro',
            insurance:'Aide Soignant',
            director_name: 'Kouakou anicet',
            date: '12-07-2023',
            amount: '200 000',
            status: 'Validated',
            actions: '',
        },
        {
            id: '',
            clinic:'Emmanuella Guei',
            insurance:'Infirmière',
            director_name: 'Kanga Louis',
            date: '12-07-2023',
            amount: '160 000',
            status: 'Refused',
            actions: '',
        },
        {
            id: '',
            clinic:'Aristide AKE Gerome',
            insurance:'Docteur',
            director_name: 'Erine liam',
            date: '12-07-2023',
            amount: '600 000',
            status: 'Validated',
            actions: '',
        }
    ]
  return (
    <div className='' >
        <div className='mb-4 w-full flex justify-end mt-4'> 
            <motion.a  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='text-[#fff] font-semibold bg-main-blue w-[200px] h-10 flex items-center justify-center rounded-[10px] cursor-pointer text-xs ' >
                {"Pay all salaries at once"}
            </motion.a>
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
                      <h1 className='text-text-dark-2 text-sm font-bold'>{"Current unpaid"}</h1>
                      <div className='flex items-center gap-2' >
                        <h1 className='text-text-light text-[10px] font-bold'>{"More"}</h1>
                        <BsArrowRight color='#9797bb' />
                      </div>
                  </div>
                  <ul>
                      <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                          <span className='block text-text-dark text-xs' > {"Salary Payment"} - <span className='text-text-light text-xs' >{"AKA LIAM"}</span> </span>
                          <span className='block text-text-dark text-xs' > {"250.000 fcfa"} - <span className='text-text-light text-xs' >{"November"}</span> </span>
                          <div className='flex items-center gap-3 ' >
                              <div className='cursor-pointer h-[40px] w-[100px] rounded-full border border-main-blue flex items-center justify-center ' >
                                <span className='text-xs font-semibold text-main-blue ' >Pay now</span>
                              </div>
                          </div>
                      </li>
                      <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                          <span className='block text-text-dark text-xs' > {"Salary Payment"} - <span className='text-text-light text-xs' >{"AKA LIAM"}</span> </span>
                          <span className='block text-text-dark text-xs' > {"250.000 fcfa"} - <span className='text-text-light text-xs' >{"November"}</span> </span>
                          <div className='flex items-center gap-3 ' >
                              <div className='cursor-pointer h-[40px] w-[100px] rounded-full border border-main-blue flex items-center justify-center ' >
                                <span className='text-xs font-semibold text-main-blue ' >Pay now</span>
                              </div>
                          </div>
                      </li>
                      <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                          <span className='block text-text-dark text-xs' > {"Salary Payment"} - <span className='text-text-light text-xs' >{"AKA LIAM"}</span> </span>
                          <span className='block text-text-dark text-xs' > {"250.000 fcfa"} - <span className='text-text-light text-xs' >{"November"}</span> </span>
                          <div className='flex items-center gap-3 ' >
                              <div className=' cursor-pointer h-[40px] w-[100px] rounded-full border border-main-blue flex items-center justify-center ' >
                                <span className='text-xs font-semibold text-main-blue ' >Pay now</span>
                              </div>
                          </div>
                      </li>
                      <li className='h-16 border-b-[1px] border-text-light border-opacity-20 flex items-center justify-between' >
                          <span className='block text-text-dark text-xs' > {"Salary Payment"} - <span className='text-text-light text-xs' >{"AKA LIAM"}</span> </span>
                          <span className='block text-text-dark text-xs' > {"250.000 fcfa"} - <span className='text-text-light text-xs' >{"November"}</span> </span>
                          <div className='flex items-center gap-3 ' >
                              <div className='cursor-pointer h-[40px] w-[100px] rounded-full border border-main-blue flex items-center justify-center ' >
                                <span className='text-xs font-semibold text-main-blue ' >Pay now</span>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </motion.div>
      </div>
        <div>
            <div className='flex items-center justify-between my-6'>
                <h1 className='text-text-dark-2 text-sm font-bold'>{"Employee list"}</h1>
                <div className='flex items-center gap-2'>
                    <h1 className='text-text-light text-[10px] font-bold'>{"..."}</h1>
                </div>
                <div>
                    
                <div className=' border border-main-blue border-opacity-10 bg-white-one rounded-md px-2 py-1 ' >
                    <input type='text' placeholder='Recherche' className=' border-none bg-white-one bg-opacity-0 px-2 outline-none w-[18rem] text-text-dark-2 placeholder:text-xs text-xs ' />
                </div>
            </div>
            </div>
            <div className='bg-[#fff] px-4 py-6 rounded-[10px]  ' >
            <div className='grid grid-cols-10 mb-2 gap-2' >
                <div className='col-span-3 text-text-light text-sm font-medium tracking-wider border-r border-text-light border-opacity-20' >{"Firstname & Lastname"}</div>
                <div className='col-span-1 text-text-light text-sm font-medium tracking-wider border-r border-text-light border-opacity-20' >{"profession"}</div>
                <div className='col-span-2 text-text-light text-sm font-medium tracking-wider border-r border-text-light border-opacity-20' >{"Salary "} <span className='font-medium text-xs text-secondary-purple ' >/ Fr cfa</span></div>
                <div className='col-span-4 text-text-light text-sm font-medium tracking-wider' >{"Actives payments mathods "}</div>
            </div>
            {
                invoices.map((invoice, index)=>
                    (
                    <motion.div  key={index} initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:0.3*(index+1)}}>
                        <EmployeeCard invoice={invoice}/>
                    </motion.div>
                    )
                )
            }
           
        </div>
        <div className='my-4 w-full flex items-center justify-between'>
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
        </div>
    </div>
  )
}

export default Insurances