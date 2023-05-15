import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
    title: "",
    employees: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const contact = () => {
    axios.post("http://localhost:9002/contact", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      });
  };

  return (
    <div class="contact-form flex flex-col justify-center items-center h-screen">
  <h1 class="text-2xl font-semibold text-gray-900 mb-4">Interested in taking a demo?</h1>
  <h2 class="text-xl font-semibold mb-4">Fill your contact details & we will organize a demo for your organisation.</h2>
  <div class="flex flex-col space-y-4">
  <input
    type="text"
    name="name"
    value={user.name}
    placeholder="First Name"
    onChange={handleChange}
    class="input border-none rounded-lg py-2 px-4 shadow-md"
    style={{width: "400px"}}
  />
  <input
    type="text"
    name="lastName"
    value={user.lastName}
    placeholder="Last Name"
    onChange={handleChange}
    class="input border-none rounded-md py-2 px-4 shadow-md"
    style={{width: "400px"}}
  />
  <input
    type="tel"
    name="phoneNumber"
    value={user.phoneNumber}
    placeholder="Phone Number"
    onChange={handleChange}
    class="input border-none rounded-md py-2 px-4 shadow-md"
    style={{width: "400px"}}
  />
  <input
    type="email"
    name="email"
    value={user.email}
    placeholder="Email"
    onChange={handleChange}
    class="input border-none rounded-md py-2 px-4 shadow-md"
    style={{width: "400px"}}
  />
  <input
    type="text"
    name="company"
    value={user.company}
    placeholder="Company"
    onChange={handleChange}
    class="input border-none rounded-md py-2 px-4 shadow-md"
    style={{width: "400px"}}
  />
  <input
    type="text"
    name="title"
    value={user.title}
    placeholder="Job Title"
    onChange={handleChange}
    class="input border-none rounded-md py-2 px-4 shadow-md"
    style={{width: "400px"}}
  />
  <input
    type="number"
    name="employees"
    value={user.employees}
    placeholder="No of Employees"
    onChange={handleChange}
    class="input border-none rounded-md py-2 px-4 shadow-md"
    style={{width: "400px"}}
  />
  <input
    type="text"
    name="message"
    value={user.message}
    placeholder="If you have any query / Comments"
    onChange={handleChange}
    class="input w-auto border-none rounded-md py-2 px-4 shadow-md"
    style={{width: "400px"}}
  />
</div>

  
  <button
    type="submit"
    onClick={contact}
    class="button bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md mt-4"
  >
    Submit
  </button>
</div>
    )
}

export default Contact