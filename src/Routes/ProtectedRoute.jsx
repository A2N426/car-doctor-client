import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";

const ProtectedRoute = ({children}) => {
    const {user,loader}=useContext(UserContext)

    if(loader){
        return <h2>Loading...</h2>
    }

    if(user?.email){
        return children
    }
    return <Navigate to="/login" replace></Navigate>;
};

export default ProtectedRoute;