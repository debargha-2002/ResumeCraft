import React from 'react';
import { FaLaptopCode, FaFileAlt, FaCheckCircle, FaClipboardList, FaPencilAlt, FaDownload } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="font-sans text-gray-300 px-4  bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white pb-20 pt-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#00B5E2]">Craft Your Perfect Resume in Minutes</h1>
          <p className="text-sm sm:text-xl mb-8 text-gray-400">
            Stand out to employers with an easy-to-use, customizable resume builder.
            Create a professional resume and get your dream job.
          </p>
          
            <button className="border-2 border-[#00B5E2] px-6 py-3 rounded-md text-[#00B5E2] hover:bg-[#00B5E2] hover:text-black transition duration-300 flex mx-auto items-center justify-center gap-x-2 font-semibold sm:text-base text-sm"
            onClick={()=>navigate('/create-resume')}>
              Craft My Resume <FaArrowRightLong />
            </button>
          
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className=" bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-12 text-white">Why Choose ResumeCraft?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <FaLaptopCode className="sm:text-4xl text-3xl mb-4 text-[#00B5E2]" />
              <h3 className="sm:text-2xl text-xl font-semibold text-white">Simple & Intuitive</h3>
              <p className="text-gray-400 mt-2 sm:text-base text-sm">User-friendly and simple to use. Create your resume in minutes.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <FaFileAlt className="sm:text-4xl text-3xl mb-4 text-[#00B5E2]" />
              <h3 className="sm:text-2xl text-xl font-semibold text-white">Professional Template</h3>
              <p className="text-gray-400 mt-2 sm:text-base text-sm">Use our professional template to showcase your experience and skills.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <FaCheckCircle className="sm:text-4xl text-3xl mb-4 text-[#00B5E2]" />
              <h3 className="sm:text-2xl text-xl font-semibold text-white">Easy Customization</h3>
              <p className="text-gray-400 mt-2 sm:text-base text-sm">Easily customize your resume based on your requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-12 text-white">How ResumeCraft Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <FaClipboardList className="sm:text-4xl text-3xl mb-4 text-[#00B5E2]" />
              <h3 className="sm:text-2xl text-xl font-semibold text-white">Choose Your Template</h3>
              <p className="text-gray-400 mt-2 sm:text-base text-sm">Select a resume template that best matches your style and career goals.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <FaPencilAlt className="sm:text-4xl text-3xl mb-4 text-[#00B5E2]" />
              <h3 className="sm:text-2xl text-xl font-semibold text-white">Fill in Your Details</h3>
              <p className="text-gray-400 mt-2 sm:text-base text-sm">Enter your work experience, skills, education and necessary fields.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <FaDownload className="sm:text-4xl text-3xl mb-4 text-[#00B5E2]" />
              <h3 className="sm:text-2xl text-xl font-semibold text-white">Download & Use</h3>
              <p className="text-gray-400 mt-2 sm:text-base text-sm">Get your resume in PDF & use it in your next job application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* End CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-black text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-white">Ready to Build Your Dream Resume?</h2>
        <button className="bg-[#00B5E2] text-black px-8 py-3 rounded-md hover:bg-[#009bb3] transition duration-300 mt-8 sm:text-base text-sm font-semibold"
        onClick={()=>navigate('/create-resume')}
        >Get Started for Free</button>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
