import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
    

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="product p-4">
                  
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addProduct">
                                <FaAd></FaAd>
                                    Add Product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    My Products</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                      
                      
                       <li>
                       <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home
                       </NavLink>
                    </li>
                    <li>
                       <NavLink to='/dashboard/history'>
                            <FaCalendar></FaCalendar>
                            Not History
                       </NavLink>
                    </li>
                    <li>
                       <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart 
                       </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Add a Review
                        </NavLink>
                    </li>
                    <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Real Payment History</NavLink>
                     </li>
                        */}
                  

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="products">
                            <FaSearch></FaSearch>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact
                        </NavLink>
                    </li> */}
                </ul>
            </div>

             {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
