import React, { ReactNode, useContext } from 'react'
import {IoMdSearch} from 'react-icons/io'
import {LuLayoutDashboard} from 'react-icons/lu'
import {CiHospital1} from 'react-icons/ci'
import {LiaFileInvoiceDollarSolid} from 'react-icons/lia'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import { DashboardRouterContext } from '../../src/context/DashboardRouterContext'
import { motion } from 'framer-motion'

function Layout({children}:{children: ReactNode}) {
  const {dispatchRoute} = useContext(DashboardRouterContext)
  return (
    <div className='h-screen w-full bg-white-two  flex' >
      <div className='w-[240px] h-full bg-white-one pl-10 py-10' >
        <div className=' flex items-center gap-2 ' >
          <span className='h-6 w-6 bg-main-red font-bold rounded-full text-xs flex items-center justify-center' > {"£"} </span>
          <span className='block font-bold text-xl text-text-dark underline' > {"EnvoyX"} </span>
        </div>
        <div className='mt-[70px]' >
          <ul className='flex flex-col gap-14 ' >
            <motion.li initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} transition={{duration:0.5}}  onClick={()=>dispatchRoute({type:'CHANGE', payload:'DASHBOARD'})}  className=' flex items-center gap-7 border-r-main-blue border-r-[2px] cursor-pointer ' >
                <span className='bock' ><LuLayoutDashboard color='#5e81f4' /></span>
                <span className='text-text-dark font-bold text-xs' > {"Dashboard"} </span>
            </motion.li>
            <motion.li initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} transition={{duration:0.5}} onClick={()=>dispatchRoute({type:'CHANGE', payload:'INVOICES'})} className=' flex items-center gap-7 cursor-pointer' >
                <span className='bock' ><LiaFileInvoiceDollarSolid color='#9797bb' /></span>
                <span className='text-text-light font-bold text-xs' > {"Invoices"} </span>
            </motion.li>
            <motion.li initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} transition={{duration:0.5}} onClick={()=>dispatchRoute({type:'CHANGE', payload:'CLINICS'})} className=' flex items-center gap-7 cursor-pointer' >
                <span className='bock' ><CiHospital1 color='#9797bb' /></span>
                <span className='text-text-light font-bold text-xs' > {"Clinics"} </span>
            </motion.li>
            <motion.li initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} transition={{duration:0.5}} onClick={()=>dispatchRoute({type:'CHANGE', payload:'INSURANCES'})} className=' flex items-center gap-7 cursor-pointer' >
                <span className='bock' ><HiOutlineBuildingOffice2 color='#9797bb' /></span>
                <span className='text-text-light font-bold text-xs' > {"Insurances"} </span>
            </motion.li>
          </ul>
        </div>
      </div>
      <div className='h-full w-full p-10 ' >
        <div className='flex items-start justify-between w-full' >
          <span className='block text-text-dark font-bold text-md' > {"Dashboard"} </span>
          <div className='flex items-center gap-3 -translate-y-3' >
            <span className='block text-text-light text-xs' > {"20 Sep 2019, Friday"} </span>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}} className='h-10 w-10 bg-main-blue bg-opacity-20 flex items-center justify-center rounded-xl cursor-pointer'>
              <IoMdSearch color='#4e4cac' />
            </motion.div>
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout