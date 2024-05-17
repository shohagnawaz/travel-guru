import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        // login user
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-2/4 mx-auto border rounded-md mt-20">
        <h2 className="text-5xl text-center pt-10">Login now</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Username or Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">
          Don`t have an account?
          <Link to="/register">
            <button className="btn btn-sm">Create an account</button>
          </Link>
        </p>
      </div>

      <div className="text-center">
        <h3>Continue with Facebook</h3>
        <h3>Continue with Google</h3>
      </div>
    </div>
  );
};

export default Login;
