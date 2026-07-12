import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContexts } from "./AuthContexts";
import { auth } from "../../Firebase/Firebase.config";

const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

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