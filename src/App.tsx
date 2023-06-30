import {  useState } from "react";
import logo from "./logo.svg";
import { Routes, Route } from 'react-router-dom';
// import { Link } from "react-router-dom"

import "./App.css";

const Login = () => {
  const [username, setusername] = useState("");
}

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-10 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-4xl font-semibold text-center text-[#19A7CE]">
              System Garage
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-800"
                >
                  username
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-[#146C94] bg-white border rounded-md focus:border-[#146C94] focus:ring-[#146C94] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-[#146C94] bg-white border rounded-md focus:border-[#146C94] focus:ring-[#146C94] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <a href="#" className="text-xs text-[#64CCC5] hover:underline">
                Forget Password?
              </a>
            </form>
            <div className="flex justify-center mt-6">
              <a href="/dashboard">
                <button className="w-64 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#19A7CE] rounded-md hover:bg-[#146C94] focus:outline-none focus:bg-purple-600">
                  Login
                </button>
              </a>
            </div>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Don't have an account?{" "}
              <a href="#" className="font-medium text-[#64CCC5] hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
