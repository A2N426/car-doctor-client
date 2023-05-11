import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const UserContext = createContext()
const auth = getAuth(app)

const AuthContext = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user)
            console.log(user)
            setLoader(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const userInfo = {
        user,
        loader,
        createUser,
        signIn
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;