import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContexts } from "./AuthContexts";
import { auth } from "../../Firebase/Firebase.config";

const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userInfo={
        createUser
    }

    return (
       <AuthContexts.Provider value={userInfo}>
        {children}
       </AuthContexts.Provider>
    );
};

export default AuthProvider;