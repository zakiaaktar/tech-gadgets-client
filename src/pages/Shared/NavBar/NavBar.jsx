import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
//import logo from "../../../assets/logo1.png";
import useAuth from "../../../hooks/useAuth";



const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();


  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `text-black` : `text-white`)}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? `text-black` : `text-white`)}
        >
          PRODUCTS
        </NavLink>
      </li>
      <div>
        {!user && (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? `text-black` : `text-white`
              }
            >
              LOGIN
            </NavLink>
          </li>
        )}
      </div>
    </>
  );
  

  
  
  return (
    <nav className="bg-[#F24C3D]  fixed z-10 w-full px-8 lg:px-24 py-4 rounded-bl-[45px] md:rounded-bl-[60px] rounded-br-[45px] md:rounded-br-[60px]">
    <div className="flex justify-between items-center">
      {/* small screen dropdown  */}
      <div className="dropdown lg:hidden z-10">
        <label tabIndex={0} className="text-3xl font-extrabold text-white">
          <HiMenuAlt1 />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content mt-3 z-[1] p-4 drop-shadow-2xl rounded-box w-48
            md:w-52 font-medium text-black text-sm bg-black border border-black bg-opacity-90"
        >
          <div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `text-[#13a0fe]` : `text-white`
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? `text-[#13a0fe]` : `text-white`
                }
              >
                PRODUCTS
              </NavLink>
            </li>
            <div>
              {!user && (
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? `text-[#13a0fe]` : `text-white`
                    }
                  >
                    LOGIN
                  </NavLink>
                </li>
              )}
            </div>
            <div className="mb-8">
              <li>
                <NavLink to="/dashboard" className="text-white font-semibold">
                  GO TO DASHBOARD
                </NavLink>
              </li>
            </div>
          </div>
          <div className="mt-4">
            {user && (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-12 rounded-full border-2 border-white">
                        <img src={user.photoURL} />
                      </div>
                    </label>
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-center text-white uppercase">
                      {user.displayName}
                    </span>
                    <div className="text-center">
                      <button
                        onClick={handleLogOut}
                        className="btn btn-xs btn-outline text-[#13a0fe]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </ul>
      </div>
      <NavLink to="/">
        {/* <div className="text-white">
          <img className="w-40 lg:w-52" src={logo} alt="" />
        </div> */}
        <h1 className="text-2xl text-white">tech gadgets</h1>
      </NavLink>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-12 font-bold  items-center">
          {navOptions}
        </ul>
      </div>
      {/* large screen dropdown  */}
      <div className={`hidden lg:block`}>
        <div className="dropdown dropdown-end z-10">
          {user ? (
            <label>
              <img
                tabIndex={0}
                className="w-16 mx-auto my-4 btn btn-ghost btn-circle btn-lg avatar border-2 border-black"
                src={user.photoURL}
              />
            </label>
          ) : (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle btn-lg avatar text-5xl text-white"
            >
              <CgProfile></CgProfile>
            </label>
          )}

          <div
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 mt-4 bg-black border border-black bg-opacity-80"
          >
            {user && (
              <>
                <div>
                  <div>
                    <span className="block font-semibold text-center mb-4 text-white uppercase mt-12">
                      <span className="text-[#13a0fe]">User :</span>{" "}
                      {user.displayName}
                    </span>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm btn-outline text-[#13a0fe]"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            )}
            <div className="flex justify-center mt-6 mb-8">
              <li>
                <NavLink to="/dashboard" className="text-white font-semibold">
                  GO TO DASHBOARD
                </NavLink>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>





    // <nav className="fixed z-10 bg-opacity-30 bg-black w-full px-8 lg:px-24 py-4 lg:py-6 rounded-bl-[45px] md:rounded-bl-[60px] rounded-br-[45px] md:rounded-br-[60px]">
    //   <div className="flex justify-between items-center">
    //     <div className="dropdown lg:hidden">
    //       <label tabIndex={0} className="text-3xl font-extrabold text-white">
    //         <HiMenuAlt1 />
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="dropdown-content mt-3 z-[1] p-4 drop-shadow-2xl rounded-box w-40
    //           md:w-52  text-sm bg-black border border-black bg-opacity-90"
    //       >
    //         {navOptions}
    //         <div className="mt-4">
    //           {user ? (
    //             <>
    //               <div className="flex items-center justify-between">
    //                 <div>
    //                   <label
    //                     tabIndex={0}
    //                     className="btn btn-ghost btn-circle avatar"
    //                   >
    //                     <div className="w-8 rounded-full">
    //                       <img src={user.photoURL} />
    //                     </div>
    //                   </label>
    //                 </div>
    //                 <div>
    //                   <span className="block font-semibold text-xs text-center text-white uppercase">
    //                     {user.displayName}
    //                   </span>
    //                   <div className="text-center">
    //                     <button
    //                       onClick={handleLogOut}
    //                       className="btn btn-xs btn-outline text-[#ffa903]"
    //                     >
    //                       Logout
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </>
    //           ) : (
    //             <>
    //               <div className="my-8 text-left">
    //                 <NavLink to="/login" className="text-[#ffa903]">
    //                   <button className="btn btn-sm btn-outline text-[#ffa903] ml-2">
    //                     Login
    //                   </button>
    //                 </NavLink>
    //               </div>
    //             </>
    //           )}
    //         </div>
    //       </ul>
    //     </div>
    //     <NavLink to="/">
    //       <div className="text-white">
    //         <h2 className={`font-black text-xl text-[#EE9322] lg:text-2xl cinzel`}>
    //         Tech Gadgets
    //         </h2>
    //         {/* <img className="w-40 lg:w-52" src={logo} alt="" /> */}
    //       </div>
    //     </NavLink>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="flex gap-12 font-semibold text-sm items-center">
    //         {navOptions}
    //       </ul>
    //     </div>
    //     <div className={`hidden lg:block`}>
    //       <div className="dropdown dropdown-end">
    //         <label
    //           tabIndex={0}
    //           className="btn btn-ghost btn-circle btn-lg avatar text-5xl text-white"
    //         >
    //           <CgProfile></CgProfile>
    //         </label>
    //         <div
    //           tabIndex={0}
    //           className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 mt-4 bg-black border border-black bg-opacity-80"
    //         >
    //           {user ? (
    //             <>
    //               <div>
    //                 <div>
    //                   <div>
    //                     <img
    //                       className="w-10 rounded-full mx-auto my-4"
    //                       src={user.photoURL}
    //                     />
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <span className="block font-semibold text-center mb-4 text-white uppercase">
    //                     {user.displayName}
    //                   </span>
    //                 </div>
    //                 <div className="text-center mb-6">
    //                   <button
    //                     onClick={handleLogOut}
    //                     className="btn btn-sm btn-outline text-[#ffa903]"
    //                   >
    //                     Logout
    //                   </button>
    //                 </div>
    //               </div>
    //             </>
    //           ) : (
    //             <>
    //               <div className="my-8 text-center">
    //                 <p className="font-semibold text-white text-lg">
    //                   Please{" "}
    //                   <NavLink to="/login" className="">
    //                     <button className="btn btn-sm btn-outline text-[#ffa903] ml-2">
    //                       Login
    //                     </button>
    //                   </NavLink>
    //                 </p>
    //               </div>
    //             </>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;

