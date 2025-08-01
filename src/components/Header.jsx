import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

    const user = useSelector(store => store.user)
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



    const handleSignOut = () => {
        signOut(auth).then(() => {  
            navigate('/')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        }); signOut
    }

    return (
        <div className='flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-99'>
            <img className='w-44'
                src={LOGO}
                alt="" />
            {
                user && (
                    <div className='flex p-2'>
                        <img className='h-12 w-12 ' src={user?.photoURL} alt="" />
                        <button onClick={handleSignOut} className='font-bold text-white'>SignOut</button>
                    </div>
                )
            }

        </div>
    )
}

export default Header