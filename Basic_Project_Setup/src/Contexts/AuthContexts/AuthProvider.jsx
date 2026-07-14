import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContexts } from "./AuthContexts";
import { auth } from "../../Firebase/Firebase.config";
import { useEffect } from "react";

const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            console.log("If observer ",currentUser);
        }else{
            console.log("else observer ",currentUser);
            
        }
    })

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log("Current User In Auth",currentUser);
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const userInfo={
        createUser,
        signinUser,
    }

    return (
       <AuthContexts.Provider value={userInfo}>
        {children}
       </AuthContexts.Provider>
    );
};

export default AuthProvider;