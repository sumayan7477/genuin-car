import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";

const UseAuth = () => {
    const auth = useContext(Authcontext);
    return auth;
};

export default UseAuth;