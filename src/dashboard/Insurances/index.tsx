import React from 'react'
import {PiCloudWarningLight} from 'react-icons/pi'

function Insurances() {
  return (
    <div className='w-full h-screen flex items-center justify-center' >
        <div className=' -translate-x-10 -translate-y-28 flex items-center justify-center flex-col ' >
          <span className='block text-text-dark text-opacity-40' ><PiCloudWarningLight size={60}/></span>
          <span className='text-text-dark-2 text-opacity-40' >{"There's nothing here!"}</span>
        </div>
    </div>
  )
}

export default Insurances