import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";


const Social = () => {
    const {googleSignIn}=useContext(UserContext)
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogle} className="btn btn-circle btn-outline">G</button>
            </div>
        </div>
    );
};

export default Social;