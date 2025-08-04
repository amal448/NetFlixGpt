import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO ,SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configureLanSlice';

const Header = () => {

    const user = useSelector(store => store.user)
    const toggle = useSelector(store => store.gpt.showGptSearch)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (userFetchedFrmFirebase) => {
            if (userFetchedFrmFirebase) {
                const { uid, email, displayName, photoURL } = userFetchedFrmFirebase;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL }))
                navigate('/browse')

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/')
            }
        });
        return () => unsubscribe()
    }, [])

    const hangleGptSearchClick =()=>{
        dispatch(toggleGptSearchView())
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {  
            navigate('/')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        }); signOut
    }
    const handleLanguageChange =(e)=>{       
        console.log(e.target.value);
         
        dispatch(changeLanguage(e.target.value))
            
    }
    return (
        <div className='flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-99'>
            <img className='w-44'
                src={LOGO}
                alt="" />
            {
                user && (
                    <div className='flex p-2'>
                        <select className='p-2 m-2 bg-gray-900 text-white'  onChange={handleLanguageChange}>
                            {
                                SUPPORTED_LANGUAGES?.map(lang =>{
                                    return(

                                        <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                                    )
                                })
                            }
                        </select>
                        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
                        onClick={hangleGptSearchClick}
                        >{toggle?"Home":"GPT Search"}</button>
                        <img className='h-12 w-12 ' src={user?.photoURL} alt="" />
                        <button onClick={handleSignOut} className='font-bold text-white'>SignOut</button>
                    </div>
                )
            }

        </div>
    )
}

export default Header