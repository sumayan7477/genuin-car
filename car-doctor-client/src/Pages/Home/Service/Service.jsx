import {  useState } from "react";
import UseServices from "../../../Hooks/UseServices";
import Servicecard from "./Servicecard";

const Service = () => {
  const [asc, setAsc] = useState(true);
  const services = UseServices(asc);
  console.log(services);
//   const [services, setServices] = useState([]);
//   useEffect(() => {
//     fetch("https://cardoctor-new.vercel.app/services")
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);
  return (
    <div>
      <div className="text-center space-y-4">
        <p className="text-orange-500 text-xl">Service</p>
        <h3 className="text-6xl">Our Services</h3>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
        <button 
        className="btn btn-outline" 
        onClick={() => setAsc(!asc)}>
          {asc ? "Price:  Hign to Low" : " Price: Low to Hign"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
        {services.map((service) => (
          <Servicecard key={service._id} service={service}></Servicecard>
        ))}
      </div>
    </div>
  );
};

export default Service;
