import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <>
            <div className=''>
                <Header />
                <div className='absolute'>
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="" />
                </div>

                <form className='absolute opacity-80 left-0 right-0 my-36 w-3/12 mx-auto bg-black bg-opacity-70 p-8 rounded-lg' action="">
                    <h1 className='text-white text-3xl py-4 font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                  
                    {
                        !isSignInForm && (
                            <>
                                <input type="text"
                                    placeholder='FullName'
                                    className='p-4 my-4 bg-gray-700 text-gray-100 
                                    rounded-md w-full' />

                               
                            </>

                        )
                    }
                    <input type="text" placeholder='email' className='p-4 my-4 bg-gray-700 text-gray-100 rounded-md w-full' />
                    <input type="text" placeholder='password' className='p-4 my-4 bg-gray-700 text-gray-100 rounded-md w-full' />
                   



                    <button className='p-4 my-4 text-white cursor-pointer bg-red-700 w-full'>Sign In</button>

                    <p className='cursor-pointer py-4 text-gray-200' onClick={toggleSignInForm}>{isSignInForm ? "Now to Netlify,Sign Up Now" : "Already registered,then Sign In"}</p>
                </form>

            </div>
        </>
    )
}

export default Login