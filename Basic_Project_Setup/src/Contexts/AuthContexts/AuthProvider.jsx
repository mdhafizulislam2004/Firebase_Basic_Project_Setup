import { AuthContexts } from "./AuthContexts";

const AuthProvider = ({children}) => {

    const userInfo={
        user: "hafizul2004habib@gmail.com"
    }

    return (
       <AuthContexts value={userInfo}>
        {children}
       </AuthContexts>
    );
};

export default AuthProvider;