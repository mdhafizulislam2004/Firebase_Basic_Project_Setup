import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContexts } from "../Contexts/AuthContexts/AuthContexts";

const Login = () => {

    const{signinUser}=use(AuthContexts)

    const location=useLocation()
    console.log(location);
    const navigate=useNavigate()

    const submitHendaler=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value

        signinUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset()
            navigate(location.state || "/")
        })
        .catch(error=>{
            console.log(error.message);
            
        })
    }

    //  const submitHendaler=(e)=>{
    //     e.preventDefault()
    //     const email=e.target.email.value
    //     const password=e.target.password.value
    //     e.target.reset()
    //     console.log("Login",email,password);
        
    // }

    return (
        <div className="card bg-base-100 top-8 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Login Your Account!</h1>
                <form onSubmit={submitHendaler}>
                    <fieldset className="fieldset">
                        {/* Email Field */}
                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" />
                        {/* Password Field */}
                        <label className="label">Password</label>
                        <input type="password" className="input" name="password" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p>Alredy Have An Account? <Link className="text-blue-700" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Login;