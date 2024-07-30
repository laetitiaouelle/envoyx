import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { MdOutlinePlaylistAddCheckCircle } from 'react-icons/md'
import { motion } from 'framer-motion'

export default function DialogBox(
        {
            showDialog, title, children
        }:
        {
            showDialog: ()=>void,
            title: string, 
            children: ReactNode
        }
    ) {

  let [isOpen, setIsOpen] = useState(true)

  const  closeModal = ()=> {setIsOpen(false); showDialog()}


  return (

    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={`relative z-10`} onClose={()=>closeModal}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto bg-white-one bg-opacity-50 ">
                <div className="flex min-h-full items-center justify-center p-4 text-center ">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <Dialog.Panel className={`transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all bg-[#fff]`}>
                        <Dialog.Title as="h3" className=" mb-5 text-lg font-medium leading-6 text-gray-900 flex items-center justify-between " >
                            <div className=' flex items-center text-text-dark-2 gap-3 ' >
                                <span> <MdOutlinePlaylistAddCheckCircle size={20} /> </span>
                                <span>{title}</span>
                            </div>
                            <motion.span whileTap={{scale:1.2}} onClick={()=>closeModal()} className='block text-main-red cursor-pointer' ><FiX/></motion.span>
                        </Dialog.Title>
                        <div>
                            {children}
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>

  )
}