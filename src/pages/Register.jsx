import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget); 
        const fName = form.get("fName");
        const lName = form.get("lName");
        const email = form.get("email");
        const password = form.get("password");
        const conPassword = form.get("conPassword");
        console.log(fName, lName, email, password, conPassword);
        // create user
     }
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-2/4 mx-auto border rounded-md mt-20">
        <h2 className="text-5xl text-center pt-10">Create an account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <input
              type="text"
              name="fName"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="lName"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control">
            <input
              type="password"
              name="conPassword"
              placeholder="Confirm Password"
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
            <button className="btn btn-primary">Create an account</button>
          </div>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
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

export default Register;
