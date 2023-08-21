import { motion } from 'framer-motion';
import React from 'react'
import { useForm } from 'react-hook-form';
import { CiStethoscope } from 'react-icons/ci';

function CreateClinic() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <div className='p-5' >

        <form onSubmit={handleSubmit((data) => alert(data))} className='grid grid-cols-10 gap-5'>
            <div className='col-span-10' >
                <motion.label whileTap={{scale:0.99}} htmlFor='file' className=' px-3 cursor-pointer flex items-center justify-start gap-3 text-text-dark w-full h-10 border border-main-blue  rounded-[10px] border-opacity-20 ' >
                    <span className='block text-main-red' ><CiStethoscope size={20} /></span>
                    <span className='flex items-center gap-1 text-sm' >{"Upload clinic cover photo"} <span className='block text-xs italic' > {"(Optional)"} </span> </span>
                </motion.label>
                <input type='file' name='file' id='file' className='hidden' accept="image/*,.pdf" />
            </div>
            <div className='col-span-5' >
                <div className=' w-full' >
                <span className='block text-sm text-text-light mb-2' > {"Clinic"} </span>
                    <input {...register('clinicName', { required: true })} 
                    className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark ' 
                    placeholder='Enter clinic name'  />
                    {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
            </div>
            <div className='col-span-5' >
                <div className=' w-full' >
                <span className='block text-sm text-text-light mb-2' > {"Phone number"} </span>
                    <input {...register('clinicTel', { required: true })} 
                    className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark ' 
                    placeholder='Enter phone numer'  />
                    {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
            </div>
            <div className='col-span-5' >
                <div className=' w-full' >
                <span className='block text-sm text-text-light mb-2' > {"Location"} </span>
                    <input {...register('town', { required: true })} 
                    className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark ' 
                    placeholder='Enter clinic location'  />
                    {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
            </div>
            <div className='col-span-5' >
                <div className=' w-full' >
                <span className='block text-sm text-text-light mb-2' > {"Clinic Website"} </span>
                    <input  {...register('invoiceDate', { required: true })} 
                    placeholder='ex : myclinic.com'
                    className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border text-xs w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark '   />
                    {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
            </div>
            <div className='col-span-10' >
                <div className=' w-full' >
                <span className='block text-sm text-text-light mb-2' > {"Exact address"} </span>
                    <input  {...register('address', { required: true })} 
                    className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark ' />
                    {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
            </div>
            <div className='col-span-10' >
                <div className=' w-full' >
                <span className='flex items-center gap-1 text-sm text-text-light mb-2' > {"Insurance"} <span className='block text-xs italic' > {"(Optional)"} </span> </span>
                    <select {...register('amount', { required: true })} 
                    className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-main-purple border-opacity-20 rounded-[10px] px-3 placeholder:text-xs placeholder:text-text-dark text-text-dark text-xs ' >
                        <option value={"in progress"} >{"In progress ✍🏾"}</option>
                        <option value={"Validated"} className='text-main-green text-xs' >{"Validated ✅"}</option>
                        <option value={"Refused"} className='text-main-red text-xs' >{"Refused 🚫"}</option>
                    </select>
                    {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
            </div>
            <div className='col-span-10 w-full' >
                <input onClick={()=>null} type="submit" value={"Create"} className='text-[#fff] w-full h-10 rounded-[10px] bg-main-blue cursor-pointer ' />
            </div>
        </form>
    </div>
  )
}

export default CreateClinic