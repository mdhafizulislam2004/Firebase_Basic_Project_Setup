import { use } from "react";
import { AuthContexts } from "../Contexts/AuthContexts/AuthContexts";
import { Navigate } from "react-router";

const PrivateRoutes = ({children}) => {
    const {user,loder}=use(AuthContexts)
    // Loder Section 
    if(loder){
        return <span className="loading loading-spinner text-success"></span>
    }
    // User Section 
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;