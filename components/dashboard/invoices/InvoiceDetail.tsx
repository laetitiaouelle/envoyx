import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FiDownload, FiFile } from 'react-icons/fi'

function InvoiceDetail() {
    const router = useRouter()
  return (
    <div className='!w-full relative px-9 py-3'>
        <div>
            <div className='grid grid-cols-2 mb-5' >
                <div className='col-span-1' >
                    <div className=' w-10 h-10 rounded-full bg-main-purple flex justify-center items-center mb-5'>
                        <div className=' w-5 h-5 rounded-full bg-white-two'></div>
                    </div>
                    <div className='text-xs uppercase text-text-dark font-medium tracking-wider mb-2' >
                        EnvoyX
                    </div>
                    <div className='text-[10px] uppercase text-text-dark'>
                        Abidjan, Cocody, Rue Cannebière,
                        <br></br>Av. Joseph Blohorn 01 BP 1463 Abidjan 01
                        <br></br>Côte d'Ivoire
                    </div>
                </div>
                <div className='col-span-1 flex flex-col items-end ' >
                    <div className='text-xs uppercase text-text-dark font-medium tracking-wider mb-2' >
                        Invoice N° F-#2024-098
                    </div>
                    <div className='text-xs uppercase text-text-light font-medium tracking-wider mb-2' >
                        Date issued: 12-02_2024
                    </div>
                    <div className='text-xs uppercase text-text-light font-medium tracking-wider mb-2' >
                        Ref: BC 55555
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 mb-10 ' >
                <div className='col-span-1'>
                    <div className=' text-main-red text-xs font-medium uppercase tracking-wider mb-2 ' >Client</div>
                    <div className=' text-sm font-medium text-text-dark tracking-wider ' >Clinic Name</div>
                </div>
                <div className='col-span-1 flex flex-col items-end'>
                    <div className=' text-main-purple text-xs font-medium uppercase tracking-wider mb-2 ' >Subject</div>
                    <div className=' text-sm font-medium text-text-dark tracking-wider ' >Invoice Cash Advance</div>
                </div>
            </div>
            <div className='text-main-purple text-xs font-medium capitalize tracking-wider mb-3' >Description</div>
            <div className='bg-main-purple p-2' >
                <div className='grid grid-cols-3' >
                    <div className='col-span-1 text-xs ' >Invoice Amount</div>
                    <div className='col-span-1 text-xs' >Amount Paid</div>
                    <div className='col-span-1 text-xs flex justify-end' >Credit</div>
                </div>
            </div>
            <div className='bg-main-purple bg-opacity-10 p-2' >
                <div className='grid grid-cols-3' >
                    <div className='col-span-1 text-xs text-text-dark-2 ' >7 500 000</div>
                    <div className='col-span-1 text-xs text-text-dark-2' >2 500 000</div>
                    <div className='col-span-1 text-xs flex justify-end text-main-red ' >5 000 000</div>
                </div>
            </div>
            <div className='mt-10 grid grid-cols-2 gap-5' >
                <div className='col-span-1' >
                    <Link href={"/dashboard/attachments"} target="_blank">
                        <div className=' cursor-pointer border border-main-purple rounded-full flex items-center justify-center py-2 gap-2' >
                            <span><FiFile size={16} color='#4e4cac'/></span>
                            <span className='text-main-purple text-xs' >Attachements</span>
                        </div>
                    </Link>
                </div>
                <div className='col-span-1' >
                    <div onClick={()=>null} className='cursor-pointer bg-main-purple rounded-full flex items-center justify-center py-2 gap-2' >
                        <span><FiDownload size={16} color='#fff'/></span>
                        <span className='text-white text-xs' >Download</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvoiceDetail