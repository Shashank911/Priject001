import React, { useState } from "react"
import WeCodeLogo from '../assets/weCode.png'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
    })

    const handleChange =  (event) => {
      const { name, value } = event.target
      setUser({
          ...user,
          [name]: value
      })
  }
  
  const register = (event) => {
    event.preventDefault(); // prevent default form behavior
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:9002/register", user)
        .then((res) => {
          alert(res.data.message);
          navigate("/login");
        });
    } else {
      alert("invalid input");
    }
  };
  


    
      return (
        <div className="register min-h-screen flex items-center justify-center bg-red-50 py-12 px-4 sm:px-6 lg:px-8">
          {console.log("User", user)}
          <div className="max-w-md w-full space-y-8">
          <div className="flex items-center">
        <img src={WeCodeLogo} className="w-20 absolute left-0 top-0" alt="WeCode logo" />
        {/* <h1 className="text-2xl font-semibold text-gray-900">WeCode</h1> */}
      </div>
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Register
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={register}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={user.name}
                onChange={handleChange}
                className="block w-full px-3 py-2 placeholder-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={user.email}
                onChange={handleChange}
                className="block w-full px-3 py-2 placeholder-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
              />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={user.password}
                onChange={handleChange}
                className="block w-full px-3 py-2 placeholder-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              <input
                id="reEnterPassword"
                name="reEnterPassword"
                type="password"
                autoComplete="new-password"
                required
                value={user.reEnterPassword}
                onChange={handleChange}
                className="block w-full px-3 py-2 placeholder-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Re-enter Password"
              />
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center">
              <div className="mr-4">or</div>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="button bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-5 mb-3 inline-block"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Register;