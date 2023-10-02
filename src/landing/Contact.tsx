import React from 'react'
import { PiExcludeFill } from 'react-icons/pi'
import { useForm } from 'react-hook-form';


function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className='  sm:py-[50px] -translate-y-[30px] lg:py-[100px] w-full px-10 grid grid-cols-10 gap-0 lg:gap-20 '  >
      <div data-aos="fade-up" data-aos-duration="1000" className=' col-span-10 lg:col-span-4 flex flex-col items-center justify-start gap-5' >
        <h1 className='text-5xl pb-5 font-lato text-center text-text-dark pt-[100px]' >{"Reach out"}</h1>
        <div className='text-text-dark text-opacity-60 font-lato text-xl' >
          <div className='flex items-center justify-center gap-1' >
            <span><PiExcludeFill color='#ff808b' /></span>
            <span className='text-text-dark ' >{"Questions or inquiries?"}</span>
          </div>
          <div className='ml-3 mt-3 text-lg sm:text-lg text-center'>
            {"We're here to help. Contact us through the method that suits you best."}
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className='col-span-10 lg:col-span-6 ' >
        <div>
          <form onSubmit={handleSubmit((data) => console.log(data))} className='grid grid-cols-2 pt-10 gap-10' >
              <div className='sm:col-span-1 col-span-2' >
                <div className=' w-full gap-10' >
                  <span className='block text-sm text-text-dark mb-2' > {"Name"} </span>
                  <input {...register('name', { required: true })} 
                  className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-text-dark border-opacity-20 rounded-sm px-3 placeholder:text-xs placeholder:text-text-dark placeholder:text-opacity-60 text-text-dark ' 
                  placeholder='Enter your name'  />
                  {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
              </div>
              <div className='sm:col-span-1 col-span-2' >
                <div className=' w-full gap-10' >
                  <span className='block text-sm text-text-dark mb-2' > {"Contact"} </span>
                  <input {...register('contact', { required: true })} 
                  className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-text-dark border-opacity-20 rounded-sm px-3 placeholder:text-xs placeholder:text-text-dark placeholder:text-opacity-60 text-text-dark ' 
                  placeholder='Enter your email or phone number'  />
                  {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
              </div>
              <div className='col-span-2' >
                <div className=' w-full gap-10' >
                  <span className='block text-sm text-text-dark mb-2' > {"Business name"} </span>
                  <input {...register('contact', { required: true })} 
                  className='outline-none focus:right-0 ring-0 bg-[#fff] h-10 border w-full border-text-dark border-opacity-20 rounded-sm px-3 placeholder:text-xs placeholder:text-text-dark placeholder:text-opacity-60 text-text-dark ' 
                  placeholder='Enter your business name'  />
                  {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
              </div>
              <div className='col-span-2' >
                <div className=' w-full gap-10' >
                  <span className='block text-sm text-text-dark mb-2' > {"Description"} </span>
                  <textarea {...register('contact', { required: true })} 
                  className='outline-none focus:right-0 h-[150px] ring-0 bg-[#fff] p-5 border w-full border-text-dark border-opacity-20 rounded-sm  placeholder:text-xs placeholder:text-text-dark placeholder:text-opacity-60 text-text-dark ' 
                  placeholder='Tell us more about your need ...'  />
                  {/* {errors.lastName && <p>Email is required.</p>} */}
                </div>
              </div>
              <div className='col-span-2 flex justify-end ' >
                  <input type="submit" className='w-full h-10 flex items-center justify-center bg-text-dark border-[0.5px] border-[#fff] rounded-sm'  />
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact