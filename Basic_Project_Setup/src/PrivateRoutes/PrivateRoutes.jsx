import { use } from "react";
import { AuthContexts } from "../Contexts/AuthContexts/AuthContexts";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({children}) => {
    const {user,loder}=use(AuthContexts)

    const location=useLocation()
    console.log(location);
    

    // Loder Section 
    if(loder){
        return <span className="loading loading-spinner text-success"></span>
    }
    // User Section 
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;