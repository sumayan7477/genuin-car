import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
// import { useContext } from "react";
// import { Authcontext } from "../../Provider/AuthProvider";
import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";




const Login = () => {
  // const { signin } = useContext(Authcontext);
  const {signin}= UseAuth();
  
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then((result) => {
        const logginuser = result.user;
        console.log(logginuser);

        // get access token
        const user = { email };
        axios
          .post("https://cardoctor-new.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/")
            }
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm border border-gray-200 rounded-md">
          <form className="card-body" onSubmit={handleLogin}>
            <h2 className="text-2xl mb-5 font-bold text-center">Login</h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
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
              <input
                className="btn text-white w-full bg-orange-600"
                type="submit"
                value="Login"
              />
            </div>
            <p className="text-center mt-5">Or, sigin with</p>
            <div className="flex gap-2 justify-center my-5">
              <button className="btn btn-circle btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button className="btn btn-circle btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button className="btn btn-circle btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-center ">
              {" "}
              Have An Account ?
              <Link className="text-orange-600 font-bold" to="/signup">
                Signup
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
