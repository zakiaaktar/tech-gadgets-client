import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import useCart from "../../../../hooks/useCart";
import useAdmin from "../../../../hooks/useAdmin";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import logo from "../../../../assets/logo.png";

const Topbar = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="navbar bg-[#6d0feb] p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-white btn-circle text-3xl"
          >
            <HiMenuAlt1 />
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border-2 border-[#13a0fe] rounded-box w-52">
            
            {/* admin role */}
            {isAdmin ? (
              <div>
                <li className="mb-6">
                  <NavLink
                    to="/dashboard/adminHome"
                    className={({ isActive }) =>
                      isActive
                        ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-blue-300 flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <FaHome className="lg:text-3xl"></FaHome> Admin Home
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#13a0fe] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <FaUsers className="lg:text-3xl"></FaUsers> All Users
                  </NavLink>
                </li>

                <li className="mb-6">
                  <NavLink
                    to="/dashboard/addProducts"
                    className={({ isActive }) =>
                      isActive
                        ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <MdOutlineProductionQuantityLimits className="lg:text-2xl">
                      {" "}
                    </MdOutlineProductionQuantityLimits>{" "}
                    Add Products
                  </NavLink>
                </li>

                <li className="mb-6">
                  <NavLink
                    to="/dashboard/manageItems"
                    className={({ isActive }) =>
                      isActive
                        ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-blue-300 flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <RiCoupon2Fill className="lg:text-3xl"></RiCoupon2Fill>{" "}
                    Manage Products
                  </NavLink>
                </li>
              </div>
            ) : (
              <div>
                <li className="mb-6">
                  <NavLink
                    to="/dashboard/userHome"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#6d0feb] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-blue-400 flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <FaHome className="lg:text-2xl"> </FaHome> User Home
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#6d0feb] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-blue-400 flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <CgProfile className="lg:text-3xl"></CgProfile>MY Profile
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#6d0feb] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-blue-400 flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <FaShoppingCart className="lg:text-2xl"> </FaShoppingCart>{" "}
                    My Cart ({cart.length})
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#6d0feb] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-blue-400 flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <FaList className="lg:text-2xl"> </FaList> Payment History
                  </NavLink>
                </li>
              </div>
            )}

            {/* devider */}
            <div className="border border-blue-400 w-11/12 mx-auto mb-4"></div>
            {/* shared  */}
            <li className="mb-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#6d0feb] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    : `text-blue-400 flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                }
              >
                <FaHome className="lg:text-2xl"></FaHome>Home
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#6d0feb] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    : `text-blue-400 flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                }
              >
                <FaSearch className="lg:text-2xl"></FaSearch>Products
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#6d0feb] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    : `text-blue-400 flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                }
              >
                <FaEnvelope className="lg:text-2xl"></FaEnvelope>Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div>
          <NavLink to="/">
            <div className="text-[#13a0fe]">
              <img className="w-40 lg:w-52" src={logo} alt="" />
            </div>
          </NavLink>
          <p className={`font-bold text-sm tracking-[10px] text-yellow-400`}>
            DASHBOARD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
