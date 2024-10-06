import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { TiArrowRepeatOutline } from "react-icons/ti";

const Servicecard = ({service}) => {
    const {_id,title,img,price}= service;
    console.log(_id);
  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto">
      <figure className="px-5 pt-5">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body font-bold ">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions">
        <p className="text-orange-600">Price : ${price}</p>
        <Link className="my-auto text-orange-600" to={`/serviceDetails/${_id}`} service={service}><TiArrowRepeatOutline /></Link>
        <Link className="my-auto text-orange-600" to={`/checkout/${_id}`}><FaArrowRight /></Link>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
