import React, { useState } from "react";
import { Link } from "react-router-dom";
import weCode from '../assets/weCode.png';
import { FaPhone, FaEnvelope } from "react-icons/fa";

const HomePage = ({setLoginUser}) => {
//   const [ user, setUser ] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser({
//       ...user,
//       [name]: value
//     });
//   };

//   const login = () => {
//     // TODO: Implement login logic
//   };

return (
  <div className="home-page box-border bg-gradient-to-r  from-blue-50 via-pink-100 min-h-screen">
    <header className="header flex justify-between items-center">
      <div className="flex items-center">
        <img src={weCode} className="w-20 top-20 left-20" alt="WeCode logo" />
        {/* <h1 className="text-2xl font-semibold text-gray-900">WeCode</h1> */}
      </div>
      <div className="flex items-center">
        <Link to="/about" className="mr-4 text-blue-600 hover:text-blue-800">About</Link>
        <Link to="/contact" className="mr-4 text-blue-600 hover:text-blue-800 ">Contact Us </Link>
        <div className="button flex items-center text-blue-600 hover:text-blue-800 cursor-pointer" onClick={() => setLoginUser({})}>
          Logout
        </div>
      </div>
    </header>
    <main className="main">
      <section className="section">
        <h2 className="text-xl font-semibold mb-4">Welcome to WeCode</h2>
        <p className="text-gray-500 ">WeCode is a dynamic startup company that specializes in the innovative fields of Artificial Intelligence and Web Development. Our mission is to leverage cutting-edge technology to help businesses transform their digital landscape and achieve their full potential.</p>
        {/* <Link to="/about" className="button bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-4 inline-block">
          Learn more
        </Link> */}
      </section>
      <section className="section">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <ul className="list-reset">
          <li className="list-item">
            {/* <Link to="/posts/1" className="link"> */}
              <h3 className="text-lg font-semibold mb-2">How AI is the New Future</h3>
              <p className="text-gray-500">Learn how AI is changeing the world.</p>
            {/* </Link> */}
          </li>
          <li className="list-item">
            {/* <Link to="/posts/2" className="link"> */}
              <h3 className="text-lg font-semibold mb-2">How to keep yourself updated in this fast moving world</h3>
              <p className="text-gray-500">Learn why it is necessary to keep changeing your business with changeing technology.</p>
            {/* </Link> */}
          </li>
          <li className="list-item">
            {/* <Link to="/posts/3" className="link"> */}
              <h3 className="text-lg font-semibold mb-2">How to take benifit of new technology</h3>
              <p className="text-gray-500">Learn how you can take benifit of these new technologies and grow your business more.</p>
            {/* </Link> */}
          </li>
        </ul>
      </section>
    </main>
    <footer className="fixed bottom-0 w-full bg-gray-200 p-4">
  <p className="text-gray-500 text-center">© 2023 WeCode</p>
</footer>

  </div>
)

}
 

export default HomePage;
