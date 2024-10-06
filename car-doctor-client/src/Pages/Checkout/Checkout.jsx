import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Checkout = () => {
  const service = useLoaderData();
  const {_id, price,title ,img } = service;
  console.log(price);
  const {user} = useContext(Authcontext);

  const handleCheckout = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email= user?.email;
        const order = {
            customerName:name,
            email,
            img,
            date,
            service:title,
            service_id:_id,
            price : price,
        }
        console.log(order);
        // send to server
        fetch('https://cardoctor-new.vercel.app/checkouts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Successfu!',
                    text: 'Checkout Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

  }
  
  return (
    <div>
        <Hero></Hero>
      <div
        className=" bg-gray-50
       w-5/6    mx-auto p-5 rounded-md my-8 "
      >
        <form onSubmit={handleCheckout} className="card-body grid lg:grid-cols-2  gap-5 ">
          <div className="form-control">
            <input
              type="text"
              placeholder="First name"
              name="name"
              defaultValue={user?.name}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              placeholder=""
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              placeholder="Due Ammount"
              name="number"
              defaultValue={price}
              className="input input-bordered"
              required
            />
          </div>
          <textarea
            className="textarea textarea-bordered col-span-2"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <div className="form-control mt-6 col-span-2">
            <button type="submit" className="btn w-full bg-orange-400 text-white ">
              Order confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
