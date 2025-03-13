import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-100 ">
      <div className="w-full max-w-2xl bg-white shadow-lg p-10 pt-20 text-center">
        <h2 className="text-xl font-semibold border-2 inline-block px-6 py-2 border-black">
          CONTACT
        </h2>
        <p className="mt-4 text-sm text-gray-700">
          My name is Prashanth Battala, I'm a UI/UX Designer looking for an
          entry-level opportunity in a reputed company to show my skills and to
          reach heights in my career.
        </p>
        <form className="mt-6 space-y-6">
          <div>
            <input
              type="text"
              placeholder="ENTER YOUR NAME*"
              className="w-full p-3 border-b-2 border-black outline-none text-gray-900 text-sm placeholder-black"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL*"
              className="w-full p-3 border-b-2 border-black outline-none text-gray-900 text-sm placeholder-black"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="PHONE NUMBER"
              className="w-full p-3 border-b-2 border-black outline-none text-gray-900 text-sm placeholder-black"
            />
          </div>
          <div>
            <textarea
              placeholder="YOUR MESSAGE*"
              rows="4"
              className="w-full p-3 border-b-2 border-black outline-none text-gray-900 text-sm placeholder-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-transparent border-2 border-black text-black py-2 px-6 font-semibold hover:bg-black hover:text-white transition"
          >
            SUBMIT
          </button>
        </form>
        <div className="mt-6">
          <hr className="border-black w-1/3 mx-auto" />
          <div className="mt-2 flex items-center justify-center space-x-2">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact