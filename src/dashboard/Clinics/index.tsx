import React, { useState } from 'react'
import ClinicCard from '../../../components/dashboard/ClinicCard';
import { AnimatePresence, motion } from 'framer-motion';
import DialogBox from '../../../components/dashboard/Dialog';
import CreateClinic from './action/CreateClinic';

function Clinics() {
  const [isOpen, setIsOpen] = useState(false)
  const clinics = [
    {
      id: 'CLINIC_A_ID',
      name: 'HealthCare Center',
      location: 'Cityville',
      address: '123 Medical Avenue',
      phone: '(123) 456-7890',
      website: 'www.healthcarecenter.com',
      email: 'info@healthcarecenter.com',
      imageURL: 'https://images.unsplash.com/photo-1523486977598-c8', 
      description: 'Offering comprehensive medical services for all ages.',
    },
    {
      id: 'CLINIC_B_ID',
      name: 'Wellness Clinic',
      location: 'Townsville',
      address: '456 Wellness Street',
      phone: '(987) 654-3210',
      website: 'www.wellnessclinic.org',
      email: 'contact@wellnessclinic.org',
      imageURL: 'https://images.unsplash.com/photo-1523486977598-c8', 
      description: 'Specializing in holistic health and alternative therapies.',
    },
    {
      id: 'CLINIC_C_ID',
      name: 'Family Medical Center',
      location: 'Suburbia',
      address: '789 Elmwood Avenue',
      phone: '(555) 123-4567',
      website: 'www.familymedicalcenter.net',
      email: 'appointments@familymedicalcenter.net',
      imageURL: 'https://images.unsplash.com/photo-1523486977598-c8', 
      description: 'Providing personalized care for families in the community.',
    }
  ];
  
  return (
    <div className='p-5 ' >
       <div className='mb-4 w-full flex justify-end'>
          <motion.a onClick={()=>setIsOpen(true)} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileTap={{scale:1.2}}  className='text-[#fff] font-semibold bg-main-blue w-[200px] h-10 flex items-center justify-center rounded-[10px] cursor-pointer text-xs ' >
              {"Add a new clinic"}
          </motion.a>
        </div>
        <div>
          <div className='flex items-center justify-between mb-6'>
              <h1 className='text-text-dark-2 text-sm font-bold'>{"Clinics"}</h1>
              <div className='flex items-center gap-2'>
                  <h1 className='text-text-light text-[10px] font-bold'>{"..."}</h1>
              </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-5' >
          {
            clinics.map((clinic, index)=> <motion.div key={index} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.3*(index+1)}}>< ClinicCard   clinic={clinic}/></motion.div>  )
          }
        </div>
        <AnimatePresence>
            {
            isOpen && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} exit={{opacity:0}} >
                    <DialogBox showDialog={() => setIsOpen(!isOpen)} title={'Add a new clinic'}>
                        <CreateClinic/>
                    </DialogBox>
                </motion.div>
            )
            }
        </AnimatePresence>
    </div>
  )

}

export default Clinics