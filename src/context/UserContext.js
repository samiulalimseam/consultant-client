import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init.js';

export const AuthContext = createContext({});
const auth = getAuth(app);


export const UserContext = ({children}) => {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    const [newTitle,setNewTitle] = useState('Home');
    const googleProvider = new GoogleAuthProvider();
    const abc = 'Samiul';
    document.title = newTitle;
    

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithemail = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
   

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    const createUser = (email, password)=>{
        
        return createUserWithEmailAndPassword(auth, email, password);
    } 
    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
             console.log('Sate changed -', currentUser);
             setLoading(false)
         })
         return ()=>{
             unsubscribe();
         }
     },[])

     useEffect(()=>{
        setLoading(true)
        
        setTimeout(() => {
        }, 2000);
        setLoading(false);
     },[])


    const authInfo = {setNewTitle,logOut,createUser,updateUser, loginWithemail, user,loading, setUser,abc, googleLogin} 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
    


export default UserContext;