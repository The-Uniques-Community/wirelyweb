import { Suspense } from 'react'
import Loader from './Loader/Loader'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/AppLayout'    
       

export default() => {
    return (
        <>
            <Suspense fallback={
                <div className='w-full h-screen flex items-center justify-center'>
                    <Loader />
                </div>
            }>
                <RouterProvider router={Router} />
            </Suspense>
        </>
    )
}