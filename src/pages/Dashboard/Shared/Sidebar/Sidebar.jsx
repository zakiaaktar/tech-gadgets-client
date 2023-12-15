import { NavLink } from "react-router-dom";
import { FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { ImBoxAdd } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { RiCoupon2Fill } from "react-icons/ri";
import useCart from "../../../../hooks/useCart";
import useAdmin from "../../../../hooks/useAdmin";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";



const Sidebar = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();


    return (
        <div className="md:w-52 lg:w-96 bg-[#13a0fe] flex justify-center min-h-screen">
        <ul className="mt-6 lg:mt-12">
          <div className="text-black mb-10 lg:mb-20">
            <NavLink to="/">
              {/* <div>
                <img className="w-40 lg:w-60 mb-2" src={logo} alt="" />
              </div> */}
            </NavLink>
            <p
              className={`font-bold text-sm lg:text-xl cinzel tracking-[3px] lg:tracking-[14px]`}
            >
              DASHBOARD
            </p>
          </div>
          
             {/* admin role */}
      {isAdmin ? (
  <div>
  <li className="mb-6">
    <NavLink
      to="/dashboard/adminHome"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <FaHome className="lg:text-3xl"></FaHome>{" "}
      Admin Home
    </NavLink>
  </li>
  <li className="mb-6">
    <NavLink
      to="/dashboard/users"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <FaUsers className="lg:text-3xl"></FaUsers>{" "}
      All Users
    </NavLink>
  </li>
  <li className="mb-6">
    <NavLink
      to="/dashboard/cart"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <FaShoppingCart className="lg:text-2xl"> </FaShoppingCart> My Cart ({cart.length})
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
      <MdOutlineProductionQuantityLimits  className="lg:text-2xl"> </MdOutlineProductionQuantityLimits> Add Products
    </NavLink>
  </li>
  <li className="mb-6">
    <NavLink
      to="/dashboard/manageItems"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <FaList className="lg:text-3xl"></FaList>{" "}
      Manage Bookings
    </NavLink>
  </li>
  
  <li className="mb-6">
    <NavLink
      to="/dashboard/allUsers"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <CgProfile className="lg:text-3xl"></CgProfile> Manage Users
    </NavLink>
  </li>
  <li className="mb-10">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <RiCoupon2Fill className="lg:text-3xl"></RiCoupon2Fill> Manage
      Coupons
    </NavLink>
  </li>
</div>
) : (
  <div>
  <li className="mb-6">
    <NavLink
      to="/dashboard/profile"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <CgProfile className="lg:text-3xl"></CgProfile>MY Profile
    </NavLink>
  </li>
  
  <li className="mb-6">
    <NavLink
      to="/dashboard/userHome"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <FaHome className="lg:text-2xl"> </FaHome> User Home 
    </NavLink>
  </li>
  <li className="mb-6">
    <NavLink
      to="/dashboard/addProduct"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <ImBoxAdd className="lg:text-2xl"> </ImBoxAdd> Add Product
    </NavLink>
  </li>
  <li className="mb-10">
    <NavLink
      to="/dashboard/myProduct"
      className={({ isActive }) =>
        isActive
          ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
          : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
      }
    >
      <RiFileList3Fill className="lg:text-3xl"></RiFileList3Fill> My
      Product
    </NavLink>
  </li>
</div>
)}

           
            
          
                  
          
          
          {/* devider */}
          {/* shared nav links */}
          <div className="border text-white w-full mb-10"></div>
          
          <li className="mb-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                  : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
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
                  ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                  : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
              }
            >
              <FaSearch className="lg:text-2xl"></FaSearch>Products
            </NavLink>
          </li>
          <li className="mb-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                  : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
              }
            >
              <FaEnvelope className="lg:text-2xl"></FaEnvelope>Conatct
            </NavLink>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;




