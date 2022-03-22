import React from 'react'

export default function ContactsForm (props) {
  return (
    <div
      className="flex flex-col min-w-0 break-words w-full bg-trueGray-200 relative bottom-0"
      id="contacts"
    >
      <div className="flex-auto flex flex-wrap p-4 lg:pl-10 lg:pr-20 .justify-between">
        <h4 className="text-4xl text-gray-700 font-extrabold w-full mb-10 px-2 text-center md:text-left">
          Contact Us For Free Initial
          Consultation
        </h4>
        <div className="relative w-full md:w-1/49 mb-3 px-0 md:px-2">
          <input
            type="text"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 width-95 w-full text-sm border-b border-gray-400 focus:outline-none focus:ring ease-linear transition-all duration-150"
            placeholder="Full Name"
          />
        </div>
        <div className="relative w-full md:w-1/49 mb-3 px-0 md:px-2">
          <input
            type="email"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 w-full text-sm border-b border-gray-400 focus:outline-none focus:ring ease-linear transition-all duration-150"
            placeholder="Email"
          />
        </div>
        <div className="relative w-full md:w-1/49 mb-3 px-0 md:px-2">
          <input
            type="phone"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 width-95 w-full text-sm border-b border-gray-400 focus:outline-none focus:ring ease-linear transition-all duration-150"
            placeholder="Phone number"
          />
        </div>
        <div className="relative w-full md:w-1/49 mb-3 px-0 md:px-2">
          <input
            type="text"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 w-full text-sm border-b border-gray-400 focus:outline-none focus:ring ease-linear transition-all duration-150"
            placeholder="Country"
          />
        </div>
        <div className="relative w-full mb-3 px-0 md:px-2">
          <textarea
            rows="1"
            cols="80"
            className="border-0 px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border-b border-gray-400 focus:outline-none focus:ring w-full"
            placeholder="Message"
          />
        </div>
        <div className="text-center mt-6 w-full md:w-5/12 px-2 m-rl-a">
          <button
            className="w-full bg-gray-700 text-white active:bg-blueGray-600 text-sm  px-6 py-3 border-gray-400 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
