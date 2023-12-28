import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  const { displayName, email, photoURL } = user || {};

  return (
    <section className="h-screen flex items-center justify-center">
      <Helmet>
        <title>Dashboard | My Profile</title>
      </Helmet>
      <div className="border-2 border-[#7071E8]">
        <div className="bg-[#7071E8] px-16 md:px-24 lg:px-40 py-6 lg:py-10">
          <img className="w-52 md:w-60 rounded" src={photoURL} alt="" />
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-3xl lg:text-4xl text-center mt-8 uppercase text-[#7071E8]">
            User Info
          </h2>
          <div className="border border-[#7071E8] mt-4 mb-8 mx-6 md:mx-10"></div>
          <h2 className="font-bold text-xl lg:text-2xl mb-4">
            Name : {displayName}
          </h2>
          <p className="font-bold text-xl lg:text-2xl mb-4">Email : {email}</p>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
