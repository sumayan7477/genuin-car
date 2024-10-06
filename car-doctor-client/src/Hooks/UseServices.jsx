import { useEffect, useState } from "react";
import { axioseSequre } from "./useAxios";

const UseServices = (asc) => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        // fetch('https://cardoctor-new.vercel.app/services')
        // .then(res=>res.json())
        // .then(data=>{
        //     setServices(data);
        // })

        axioseSequre(`/services?sort=${asc ? 'asc':'desc'}`)
        .then(res => setServices(res.data))
        
    },[asc])

    return [services];
};

export default UseServices;