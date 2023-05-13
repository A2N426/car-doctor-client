import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const UserContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            if (user && user.email) {
                const email = {
                    email: user.email,
                }

                fetch("https://car-doctor-server-a2n426.vercel.app/token", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(email)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("JWT response", data)
                        localStorage.setItem("car-token", data.token)
                    })
            }
            else{
                localStorage.removeItem("car-token")
            }
            setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = {
        user,
        loader,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;