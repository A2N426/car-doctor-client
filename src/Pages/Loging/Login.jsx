import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { UserContext } from '../../Context/AuthContext';
import Social from '../Shared/Social';

const Login = () => {
    const { signIn } = useContext(UserContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from,{replace:true})
            })
            .catch(error => console.log(error.message));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-12 lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 p-5 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <h1 className="text-center text-5xl font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <input className="bg-red-600 mt-6 cursor-pointer w-full py-3 font-semibold rounded-lg text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <Social></Social>
                        {/* <div>
                            <h2>Google LingIn Facebook</h2>
                        </div> */}
                        <p className='mt-2'>You have not account? <Link className='text-red-600 underline text-md font-semibold' to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;