import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  //bg-gradient-to-r from-[#6d0feb] to-[#7071E8] px-8 lg:px-24 py-12 rounded-tl-3xl rounded-br-3xl border-[#7071E8]

  return (
    <div className="w-4/5 mx-auto my-16">
      <h2 className="text-3xl font-extrabold mb-8">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
        <span> !!!</span>
      </h2>

      <div className="stats stats-vertical lg:stats-horizontal shadow rounded-tl-3xl rounded-br-3xl border-4 border-[#7071E8]">
        <div className="stat">
          <div className="stat-figure">
            <FaDollarSign className="text-2xl mt-5  text-[#cb45e1]"></FaDollarSign>
          </div>
          <div className="stat-title text-[#7071E8] font-bold">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
        </div>

        <div className="stat border-4 border-[#7071E8]">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-2xl mt-5  text-[#cb45e1]"></FaUsers>
          </div>
          <div className="stat-title text-[#7071E8] font-bold">Users</div>
          <div className="stat-value">{stats.users}</div>
        </div>

        <div className="stat border-2 border-[#7071E8]">
          <div className="stat-figure text-secondary">
            <FaBook className="text-2xl mt-5 text-[#cb45e1]"></FaBook>
          </div>
          <div className="stat-title text-[#7071E8] font-bold">
            Product Items
          </div>
          <div className="stat-value">{stats.productItems}</div>
        </div>

        <div className="stat border-2 border-[#7071E8]">
          <div className="stat-figure text-secondary">
            <FaBook className="text-2xl mt-5  text-[#cb45e1]"></FaBook>
          </div>
          <div className="stat-title text-[#7071E8] font-bold">Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
