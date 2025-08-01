import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PROFILE } from '../utils/constants';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [error, setError] = useState()
    const dispatch=useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }


    const handleButtonClick = () => {
        const message = isSignInForm ? checkValidateData(email.current.value, password.current.value, isSignInForm) : checkValidateData(email.current.value, password.current.value, name.current.value, isSignInForm)
        setError(message)
        if (message) return

        if (!isSignInForm) {
            //sign up or register

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    
                    updateProfile(user, {
                        displayName: name.current.value, photoURL:{PROFILE}
                      }).then(() => {
                            const {uid,email,displayName,photoURL}=auth.currentUser
                        // Profile updated!
                        dispatch(addUser({uid:uid ,email:email,displayName:displayName,photoURL:photoURL}))
                        // ...
                      }).catch((error) => {
                        // An error occurred
                        setError(error)
                        // ...
                      });
                    
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    
                    setError(errorMessage)
                    // ..
                });

        }
        if (isSignInForm) {
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorMessage)
                });
        }

    }
    return (
        <>
            <div className=''>
                <Header />
                <div className='absolute'>
                    <img src={PROFILE} alt="" />
                </div>

                <form onSubmit={(e) => e.preventDefault()} className='absolute opacity-80 left-0 right-0 my-36 w-3/12 mx-auto bg-black bg-opacity-70 p-8 rounded-lg' action="">
                    <h1 className='text-white text-3xl py-4 font-bold uppercase'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                    {
                        !isSignInForm && (
                            <>
                                <input type="text"
                                    ref={name}
                                    placeholder='FullName'
                                    className='p-4 my-4 bg-gray-700 text-gray-100 
                                    rounded-md w-full' />


                            </>

                        )
                    }
                    <input type="text" ref={email} placeholder='email' className='p-4 my-4 bg-gray-700 text-gray-100 rounded-md w-full' />
                    <input type="password" ref={password} placeholder='password' className='p-4 my-4 bg-gray-700 text-gray-100 rounded-md w-full' />

                    <p className='text-red-500'>{error}</p>
                    <button className='p-4 my-4 text-white cursor-pointer bg-red-700 w-full'
                        onClick={handleButtonClick}
                    >
                        {isSignInForm ?
                            "Sign In" : "Sign Out"
                        }
                    </button>

                    <p className='cursor-pointer py-4 text-gray-200' onClick={toggleSignInForm}>{isSignInForm ? "Now to Netlify,Sign Up Now" : "Already registered,then Sign In"}</p>
                </form>

            </div>
        </>
    )
}

export default Login