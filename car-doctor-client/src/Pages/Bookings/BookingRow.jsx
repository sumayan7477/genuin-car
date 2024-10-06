const BookingRow = ({ booking,handleDelete ,handleConfirm}) => {
  const { _id, img, customerName, price, date, email } = booking;

  
  return (
    <tr>
      <td>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>

      <td>
        <div className="flex  gap-3">
          <div className="avatar">
            <div className="mask  h-24 w-24 rounded-md">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div className=" text-2xl">
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {price}
        <br />
        {/* <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span> */}
      </td>
      <td>{date}</td>
      <th>
        <button onClick={()=>handleConfirm(_id)} className="btn bg-orange-400">pending</button>
      </th>
    </tr>
  );
};

export default BookingRow;
