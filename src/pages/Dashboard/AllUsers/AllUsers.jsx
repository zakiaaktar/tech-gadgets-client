import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div className="w-4/5 mx-auto my-16 bg-blue-100 py-8 px-2">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl text-[#7071E8] font-bold">All Users</h2>
                <h2 className="text-3xl text-[#7071E8] font-bold">Total Users: {users.length}</h2>
            </div>

            {/* table */}
            <div className="overflow-x-auto w-full mx-2">
  <table className="table table-zebra">
    {/* head */}
    <thead className="text-[#7071E8] font-bold text-lg">
    <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
            {
                users.map((user, index) => <tr key={user._id}>
                    <th className="text-[#7071E8] font-bold">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    { user.role === 'admin' ? 'Admin' : <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-md bg-[#7071E8] font-bold">
                        <FaUsers className="text-white 
                        text-2xl"></FaUsers>
                        </button>}
                    </td>
                    <td>
                    <button
                            onClick={() => handleDeleteUser(user)}
                            className="btn btn-ghost btn-lg">
                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                        </button>
                    </td>
                  </tr>)
            }
      </tbody>
  </table>
            </div>
        </div>
    );
};

export default AllUsers;