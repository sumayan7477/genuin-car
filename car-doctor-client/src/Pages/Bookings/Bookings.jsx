import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from 'sweetalert2'
// import axios from "axios";
import useAxios from "../../Hooks/useAxios";


const Bookings = () => {
  const { user } = useContext(Authcontext);
  console.log(user);
  const [bookings, setBookings] = useState([]);
  const axiosSceure = useAxios();

  console.log("user email", user?.email);

  // const url = `https://cardoctor-new.vercel.app/checkouts?email=${user?.email}`;
  const url = `/checkouts?email=${user?.email}`;

  useEffect(() => {
    axiosSceure.get(url)
    .then(res=>{
      setBookings(res.data);
    })

    // axios.get(url , {withCredentials:true})
    // .then(res=>{
    //   setBookings(res.data);
    // })

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  },[url , axiosSceure]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete?");
    if (proceed) {
        fetch(`https://cardoctor-new.vercel.app/checkouts/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire({
                    title: 'Succcessful!',
                    text: 'delete successfull',
                    icon: 'successful',
                    confirmButtonText: 'Ok'
                  });
                const remaining = bookings.filter(booking=>booking._id !==id);
                setBookings(remaining);
            }
        })
    }
  };

  const handleConfirm = (id) =>{
    fetch(`https://cardoctor-new.vercel.app/checkouts/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify({status:'confirmed'})

    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            // update state

        }
    })
  }

  return (
    <div>
     
      <div className="overflow-x-auto my-7">
        <table className="table  mx-auto">
          {/* head */}
          
          <tbody>
            {bookings.map((booking) => (
              <BookingRow 
              key={booking._id} 
              booking={booking} 
              handleDelete={handleDelete}
              handleConfirm={handleConfirm}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
