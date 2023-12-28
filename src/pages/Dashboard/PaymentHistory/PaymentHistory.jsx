import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="w-4/5 mx-auto my-16  py-8 px-2 border-4 rounded-tl-3xl rounded-br-3xl border-[#7071E8]">
      <SectionTitle title="Payment History"></SectionTitle>
      <h2 className="text-2xl text-[#7071E8] font-bold text-center mb-8">
        Total Payments: {payments.length}
      </h2>
      <div className="border border-[#7071E8] mt-4 mb-8 mx-6 md:mx-10"></div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-[#7071E8] text-lg">
            <tr>
              <th>#</th>
              <th>price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th className="text-[#7071E8] text-lg">{index + 1}</th>
                <td>${payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
