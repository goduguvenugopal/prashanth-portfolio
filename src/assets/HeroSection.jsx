import React from 'react'
import AboutSection from './AboutSection'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { FaFigma } from 'react-icons/fa'
import { CgFigma } from 'react-icons/cg'

const HeroSection = () => {
    return (
        <>
            <section className="relative w-full h-screen flex items-center   overflow-hidden">
                {/* Left Side - Content */}
                <div className="absolute inset-y-0 left-0 w-2/3 lg:w-1/2 flex flex-col justify-center pl-10 md:pl-20 lg:pl-32 z-10">
                    <p className="text-lg font-semibold text-gray-600">Hi, I am</p>
                    <h1 className="text-4xl   font-bold text-gray-900">
                        Prashanth Batthala
                    </h1>
                    <p className="text-xl text-gray-500 mt-2">UI Designer / Visual Designer</p>

                    {/* Icons */}
                    <div className="flex gap-3 mt-4">
                        <button className="p-3 bg-gray-300 font-medium text-white hover:bg-gray-400 rounded-md shadow-md">
                        <span className="text-black font-bold rounded">
                             <CgFigma size={25}/>
                            </span>
                        </button>
                        <button className="p-3 bg-gray-300 font-medium text-white hover:bg-gray-400 rounded-md shadow-md">
                        <span className='bg-black p-1 '>
                             Xd
                            </span>
                        </button>
                        <button className="p-3 bg-gray-300 font-medium text-white hover:bg-gray-400 rounded-md shadow-md">
                           <span className='bg-black p-1 rounded'>
                             Ps
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Side - Cross-cut Image */}
                <div className="absolute inset-y-0 right-0  w-[90%] overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 clip-slant"></div>
                    <img
                        src="/prashanth.jpeg" // Replace with actual image URL
                        alt="Profile"
                        className="w-full h-full object-cover scale-100 clip-slant"
                    />
                </div>

                {/* Navigation */}
                <nav className="absolute items-center top-6 right-8 flex flex-wrap p-5 lg:flex-wrap lg:p-0 gap-6 text-black font-medium lg:text-white text-lg z-20">
                    <a href="#about" className="hover:text-gray-300">About Me</a>
                    <a href="#skills" className="hover:text-gray-300">Skills</a>
                    <a href="https://drive.google.com/file/d/1UzDG-d4mqaEwmBm2uzRslfPtGbMDRWjE/view?usp=drive_link" className="hover:text-gray-300">Resume</a>
                    <a href='#contact' className="px-4 py-2 text-nowrap bg-white text-black rounded-full shadow-md">
                        Contact Me
                    </a>
                </nav>

            </section>
            <section className='bg-black py-5 px-10'>
                <h4 className='text-white  font-[700] text-[30px] font-[Montserrat]'>Objective</h4>
                <p className='my-4 font-[Open Sans] text-[19px] text-white'>Aspiring UI Designer with a strong passion for creating intuitive and visually appealing user interfaces. Proficient in tools like Figma, Adobe XD, and Sketch, with foundational knowledge of user-centered design principles and responsive design. Eager to contribute to a dynamic team to enhance user experiences and grow professionally in the field of UI/UX design.</p>

                <button className='text-white border w-[139px]  border-y-0 border-x-2 text-[15px] font-[Montserrat]'>READ MORE</button>
            </section>

            <div id="about">
                <AboutSection />
            </div>

            <div id='skills'>
                <Skills />
            </div>

            <div>
                <Projects />
            </div>

            <div id='contact'>
                <Contact />
                <Footer />
            </div>
        </>


    )
}

export default HeroSection