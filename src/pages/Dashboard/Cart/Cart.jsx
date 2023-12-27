import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  //console.log(totalPrice);
  const fixTotalPrice = totalPrice.toFixed(2);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-4/5 mx-auto my-16  py-8 px-2 border-4 rounded-tl-3xl rounded-br-3xl border-[#7071E8]">
      <div className="flex justify-evenly my-11">
        <h2 className="text-3xl font-bold text-[#7071E8]">
          Items: {cart.length}
        </h2>
        <h2 className="text-3xl font-bold text-[#7071E8]">
          Total Price: {fixTotalPrice}
        </h2>

        {/* pay btn */}
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn bg-violet-600 text-white text-lg rounded-full px-6  border-none font-extrabold hover:bg-[#7071E8] cursor-pointer -mt-10">
              Pay
            </button>
          </Link>
        ) : (
          <button disabled className="btn btn-neutral">
            Pay Now
          </button>
        )}
      </div>
      {/* table */}
      <div className="overflow-x-auto mx-2">
        <table className="table w-full">
          {/* head */}
          <thead className="text-[#7071E8] text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th className="text-[#7071E8] text-lg">{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
