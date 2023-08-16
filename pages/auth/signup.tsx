import Image from 'next/image'
import React from 'react'
import { svg1, svg2, svg3 } from '../../src/constant/image'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Signup() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
  return (
    <div className='bg-white-one h-screen w-full' >
        <div className='grid grid-cols-2 h-full items-center'>
            <div className='col-span-1 p-10' >
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} >
                    <span className='block text-text-dark text-4xl text-center mb-2 font-bold'> {"Welcome!"} </span>
                    <span className='block text-text-dark text-4xl text-center mb-6 font-bold'> {"Please create your"} <span className='inline underline text-main-red' >  {"EnvoyX"} </span> {"account"} </span>
                    <span className='block text-text-light text-center mb-3'> {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id explicabo reprehenderit cumque, vero tempora non. Pti, tenetur a, quia cupiditate officiis!"}</span>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className='px-10 pt-10 ' >
                    <div className='relative  flex items-center justify-center' >
                        <Image src={svg1} width={500} alt='svg1' className='relative' />
                    </div>
                </motion.div>
            </div>
            <div className='col-span-1 bg-white-two  h-full px-10 flex items-center ' >
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className='w-full bg-[#fff] rounded-xl' >
                    <div className='w-full pt-10' >
                        <div className='text-text-dark font-bold text-center text-xl ' >{"Sign up"}</div>
                        <span className='block text-text-light text-center mt-3 text-xs'> {"Lorem ipsum dolor sit amet, consectetur adipisicing elit."} </span>
                    </div>
                    <form onSubmit={handleSubmit((data) => router.push('/auth/signin'))} className='grid grid-cols-1 pt-10 px-10 space-y-5' >
                        <div className='col-span-1 grid grid-cols-2 gap-5' >
                           <div className='col-span-1 w-full' >
                            <span className='block text-sm text-text-light mb-2' > {"Firstname"} </span>
                             <input {...register('firstName')} 
                             className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark ' 
                             placeholder='Enter your Firstname'  />
                           </div>
                           <div className='col-span-1 w-full' >
                             <span className='block text-sm text-text-light mb-2' > {"Lastname"} </span>
                             <input {...register('lastName', { required: true })}
                             className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark ' 
                             placeholder='Enter your Lastname'  />
                            </div>
                         </div>
                        <div className='col-span-1 gap-10' >
                           <div className=' w-full' >
                            <span className='block text-sm text-text-light mb-2' > {"Email"} </span>
                             <input {...register('email', { required: true })} 
                             className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark ' 
                             placeholder='Enter your email'  />
                             {/* {errors.lastName && <p>Email is required.</p>} */}
                           </div>
                         </div>
                        <div className='col-span-1 gap-10' >
                           <div className=' w-full' >
                            <span className='block text-sm text-text-light mb-2' >{"Password"}</span>
                             <input {...register('password', { required: true })} 
                             className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark ' 
                             placeholder='**********'  />
                             {/* {errors.lastName && <p>Password is required.</p>} */}
                           </div>
                         </div>
                        <div className='col-span-1 gap-10' >
                           <div className=' w-full' >
                            <span className='block text-sm text-text-light mb-2' > {"Confirm password"} </span>
                             <input {...register('password', { required: true })} 
                             className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark ' 
                             placeholder='**********'  />
                             {/* {errors.lastName && <p>Password is required.</p>} */}
                           </div>
                         </div>
                        <div className='col-span-1 w-full' >
                            <input type="submit" onClick={()=>router.push('/auth/signin')} className='text-[#fff] w-full h-10 rounded-[10px] bg-main-blue cursor-pointer ' />
                        </div>
                    </form>
                    <div className='flex items-center justify-center gap-2 mb-10 mt-4' >
                        <span className='block text-text-light text-xs' > {"Already have an account ?"} </span>
                        <Link href='/auth/signin' className='cursor-pointer text-main-red text-xs font-bold ' >{"Sign in"}</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Signup