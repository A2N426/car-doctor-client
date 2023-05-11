import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";

const Navbar = () => {
    const { user, logOut } = useContext(UserContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navLinks = <>
        <li><Link className="font-semibold" to="/">Home</Link></li>
        <li><Link className="font-semibold" to="/about">About</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to="/bookings" className="font-semibold">My bookings</Link></li>
                    <li><button className="font-semibold" onClick={handleLogOut}>Logout</button></li>

                </>
                : <li><Link to="/login"><button className="font-semibold">Login</button></Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-300 rounded-lg p-3 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navLinks}

                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end">
                <button className="outline outline-1 font-semibold outline-red-600 hover:text-white text-red-600 hover:bg-red-600 hover:outline-none rounded-lg p-3">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;