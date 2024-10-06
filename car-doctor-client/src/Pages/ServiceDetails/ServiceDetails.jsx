import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ServiceDetails = () => {
    const service = useLoaderData();
    const {_id , title} = service;

    return (
        <div>
        <Link className="my-auto text-orange-600" to={`/checkout/${_id}`}><FaArrowRight /></Link>
           <p>{title}</p> 
        </div>
    );
};

export default ServiceDetails;