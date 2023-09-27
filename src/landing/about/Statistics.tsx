import React from 'react'

function Statistics() {
  return (
    <div className='p-[150px]  grid grid-cols-3 items-center justify-around ' >
        <div className='col-span-1 border-r border-dashed border-y-text-light flex flex-col items-center gap-3 mx-3 ' >
            <div className='flex items-start gap-1  ' >
                <span className='text-text-dark block text-7xl font-lato ' >{"20K"}</span>
                <span className='text-text-dark  block text-5xl -translate-y-4  font-lato' >{"+"}</span>
            </div>
            <div className='text-center text-text-dark text-opacity-60 font-lato' >
                {"Lorem ipsum dolor sit amet elit. Quos quis temporibus quaerat voluptatem iure ipsam."} 
            </div>
        </div>
        <div className='col-span-1 border-r border-dashed border-y-text-light flex flex-col items-center gap-3 mx-3 ' >
            <div className='flex items-start gap-1  ' >
                <span className='text-text-dark block text-7xl font-lato ' >{"20K"}</span>
                <span className='text-text-dark  block text-5xl -translate-y-4  font-lato' >{"+"}</span>
            </div>
            <div className='text-center text-text-dark text-opacity-60 font-lato' >
                {"Lorem ipsum dolor sit amet elit. Quos quis temporibus quaerat voluptatem iure ipsam."} 
            </div>
        </div>
        <div className='col-span-1 flex flex-col items-center gap-3 mx-3 ' >
            <div className='flex items-start gap-1  ' >
                <span className='text-text-dark block text-7xl font-lato ' >{"20K"}</span>
                <span className='text-text-dark  block text-5xl -translate-y-4  font-lato' >{"+"}</span>
            </div>
            <div className='text-center text-text-dark text-opacity-60 font-lato' >
                {"Lorem ipsum dolor sit amet elit. Quos quis temporibus quaerat voluptatem iure ipsam."} 
            </div>
        </div>
    </div>
  )
}

export default Statistics