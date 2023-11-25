import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `text-white` : `text-[#EE9322]`
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? `text-white` : `text-[#EE9322]`
          }
        >
          PRODUCTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `text-white` : `text-[#EE9322]`
          }
        >
          LOGIN
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? `text-white` : `text-[#EE9322]`
          }
        >
          REGISTER
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed z-10 bg-opacity-30 bg-black w-full px-8 lg:px-24 py-4 lg:py-6 rounded-bl-[45px] md:rounded-bl-[60px] rounded-br-[45px] md:rounded-br-[60px]">
      <div className="flex justify-between items-center">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="text-3xl font-extrabold text-white">
            <HiMenuAlt1 />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-4 drop-shadow-2xl rounded-box w-40
              md:w-52  text-sm bg-black border border-black bg-opacity-90"
          >
            {navOptions}
            {/* <div className="mt-4">
              {user ? (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </label>
                    </div>
                    <div>
                      <span className="block font-semibold text-sm text-center text-white uppercase">
                        {user.displayName}
                      </span>
                      <button
                        onClick={handleLogOut}
                        className="btn btn-xs btn-outline text-[#ffa903]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="my-8 text-left">
                    <NavLink to="/login" className="text-[#ffa903]">
                      <button className="btn btn-sm btn-outline text-[#ffa903] ml-2">
                        Login
                      </button>
                    </NavLink>
                  </div>
                </>
              )}
            </div> */}
          </ul>
        </div>
        <NavLink to="/">
          <div className="text-white">
            <h2 className={`font-black text-xl text-[#EE9322] lg:text-2xl cinzel`}>
              Tech Gadgets
            </h2>
          </div>
        </NavLink>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 font-semibold text-sm items-center">
            {navOptions}
          </ul>
        </div>
        <div className={`hidden lg:block`}>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar text-4xl text-white"
            >
              <CgProfile></CgProfile>
            </label>
            {/* <div
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 mt-4 bg-black border border-black bg-opacity-80"
            >
              {user ? (
                <>
                  <div>
                    <div>
                      <div>
                        <img
                          className="w-10 rounded-full mx-auto my-4"
                          src={user.photoURL}
                        />
                      </div>
                    </div>
                    <div>
                      <span className="block font-semibold text-center mb-4 text-white uppercase">
                        {user.displayName}
                      </span>
                    </div>
                    <div className="text-center mb-6">
                      <button
                        onClick={handleLogOut}
                        className="btn btn-sm btn-outline text-[#ffa903]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="my-8 text-center">
                    <p className="font-semibold text-white text-lg">
                      Please{" "}
                      <NavLink to="/login" className="">
                        <button className="btn btn-sm btn-outline text-[#ffa903] ml-2">
                          Login
                        </button>
                      </NavLink>
                    </p>
                  </div>
                </>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

