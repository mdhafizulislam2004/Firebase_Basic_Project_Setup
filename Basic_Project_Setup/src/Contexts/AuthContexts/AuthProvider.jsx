import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContexts } from "./AuthContexts";
import { auth } from "../../Firebase/Firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signout=()=>{
        return signOut(auth)
    }

    // onAuthStateChanged(auth,(currentUser)=>{
    //     if(currentUser){
    //         console.log("If observer ",currentUser);
    //     }else{
    //         console.log("else observer ",currentUser);
            
    //     }
    // })

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log("Current User In Auth",currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const userInfo={
        user,
        createUser,
        signinUser,
        signout,
    }

    return (
       <AuthContexts.Provider value={userInfo}>
        {children}
       </AuthContexts.Provider>
    );
};

export default AuthProvider;