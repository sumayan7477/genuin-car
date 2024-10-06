import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouts = ({children}) => {
    const {user , loading} =useContext(Authcontext);
    // to go to the place where it suppos to be
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <progress className="progress w-56 absolute top-1/2 left-1/3 mx-auto"></progress>;
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivetRouts;