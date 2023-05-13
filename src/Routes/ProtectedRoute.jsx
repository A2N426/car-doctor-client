import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";

const ProtectedRoute = ({children}) => {
    const {user,loader}=useContext(UserContext)
    const location = useLocation()

    if(loader){
        return <h2>Loading...</h2>
    }

    if(user?.email){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default ProtectedRoute;