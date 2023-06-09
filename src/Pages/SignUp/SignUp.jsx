import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { UserContext } from '../../Context/AuthContext';
import Social from '../Shared/Social';

const SignUp = () => {
    const { createUser } = useContext(UserContext)
    const handleSignUp = event =>{
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser) 
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-12 lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 p-5 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp}>
                        <div className="card-body">
                            <h1 className="text-center text-5xl font-bold">SignUp</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control cursor-pointer mt-6">
                                <input className="bg-red-600 w-full py-3 font-semibold rounded-lg text-white" type="submit" value="SignUp" />
                            </div>
                        </div>
                    </form>
                    <div className='text-center'>
                        <Social></Social>
                        {/* <div>
                            <h2>Google LingIn Facebook</h2>
                        </div> */}
                        <p className='mt-2' >Have an account? <Link className='text-red-600 underline text-md font-semibold' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;