import React from 'react';
import {Link} from 'react-router-dom'
import sChauhan from '../assets/sChauhan.png'
import googleLogo from '../assets/googleLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import youtubeLogo from '../assets/youtubeLogo.png';

const About = () => {
  return (
    <div className="box-border bg-gradient-to-r from-red-100 via-orange-200 via-blue-500 via-green-400 via-teal-400 via-blue-400 via-indigo-400 via-purple-400 to-pink-200 min-h-screen">
      <div className="flex items-center flex-col">
        <img
          src={sChauhan}
          className="w-20 mt-4"
          alt="sChauhan"
        />
        <h1 className="font-bold mb-8">The Change is Here</h1>
      </div>
      <div className="flex flex-col items-center">
        <p>At our company, we are passionate about leveraging the latest web development and AI technologies to help our clients achieve their goals. We take pride in delivering high-quality work that is tailored to each client's unique needs, and we are committed to providing exceptional customer service throughout the entire process.</p>
        <p>Our team consists of experienced web developers and AI experts who stay up-to-date with the latest trends and best practices in their respective fields. We believe in working closely with our clients to understand their business objectives and deliver solutions that exceed their expectations.</p>
        <p>Thank you for considering our company for your web development and AI needs. We look forward to the opportunity to work with you!</p>
      </div>
      

<div className="flex flex-col items-center">
  <h2 className='mt-5 font-bold'>Trusted by industry leaders and the biggest innovators.</h2>
  <p className='text-left my-8'>Companies use WeCode for their AI needs and Web Development.</p>
  <div className="flex justify-center space-x-4 mb-8">
    <div className="mx-4">
      <img src={googleLogo} className="w-20" alt="googleLogo" />
    </div>
    <div className="mx-4">
      <img src={linkedinLogo} className="w-20" alt="linkedinLogo" />
    </div>
    <div className="mx-4">
      <img src={youtubeLogo} className="w-20" alt="youtubeLogo" />
    </div>
    
  </div>
</div>



        
        
          <Link to={"/"} className="mr-4 text-blue-600 hover:text-blue-800">Back to Home</Link>
        
    </div>
  );
};

export default About;
