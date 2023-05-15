import React, {useState} from "react";

import axios from "axios";
// import jwt_decode from 'jwt-decode';
import WeCodeLogo from '../assets/weCode.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

// import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser}) => {

    let navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

//     const createOrGetclient = async (response) => {
//         const decoded = jwt_decode(response.credential);
//         const { name, picture, sub } = decoded;

//       const client = {
//         _id: sub,
//         _type: 'User',
//         userName : name,
//         image: picture
//       }

//     //   // const createOrGetclient = () => {
//     //   //   axios.post("http://localhost:3000/api/auth", client)
//     //   //   .then(res => {
//     //   //        navigate("/")
//     //   //   })
//     // }

//     axios.post("http://localhost:3000/api/auth", client)
//     .then((res) => {
//       alert(res.data.message);
//       setLoginUser(res.data.user);
//       navigate("/");
//     });
// };


    // const googleAuth = () => {
	// 	window.open(
	// 		`${process.env.REACT_APP_API_URL}/auth/google/callback`,
	// 		"_self"
	// 	);
	// };

    

    const handleChange =  (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    

    

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        })
    }

    return (
        <GoogleOAuthProvider clientId="908792428011-5jvegdt7v57579v38hn1e8497cdr3cah.apps.googleusercontent.com">  
      <div className="min-h-screen flex items-center justify-center bg-red-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div flex items-center>
          <img
            src={WeCodeLogo}
            className="w-20 absolute left-0 top-0"
            alt="WeCode Logo"
          />
          </div>
          <h1 className="font-bold text-center mt-4 text-3xl">Login</h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label
                htmlFor="email"
                className="font-semibold text-sm text-gray-600 pb-1 block"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label
                htmlFor="password"
                className="font-semibold text-sm text-gray-600 pb-1 block"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <div className="button bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-5 mb-3 inline-block cursor-pointer" onClick={login}>
                Login
              </div>
              <hr className="hr-text" data-content="or" />
              <div className="google-btn-container">
                <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
                <div className="register-text">
                  <p>New to WeCode ? ... Register here</p>
                </div>
              </div>
              <div className="button bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-5 mb-3 inline-block cursor-pointer"onClick={() => navigate("/register")}>
            Register
        </div>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;



