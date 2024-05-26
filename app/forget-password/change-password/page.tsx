'use client';
import React, { useState ,Fragment } from 'react'
import Title from "@/app/components/utils/Title"
import loginLogic from '@/app/logic/auth/login';
function LogIn() {
  const handleSubmit = loginLogic()
  return (
     <div className='h-screen bg-zinc-200 flex justify-center items-center'>
         <div className="flex flex-1 rounded md:flex-none flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Title text='change your password'/>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="passwordConfirm" className="block text-sm font-medium leading-6 text-gray-900">
                Password Confirm
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:border-b-4 focus-within:border-amber-400 focus-within:outline-none  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className=" w-full  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm background  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 ease-in-out duration-300"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
     </div>
  )
}
export default LogIn