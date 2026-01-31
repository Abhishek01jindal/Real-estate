import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="flex container mx-auto justify-between items-center py-4 px-6 bg-transparent md:px-20 lg:px-32">
        
       
        <img src={assets.logo} alt="logo" className="w-28" />

       
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>

       
        {!user ? (
          <Link
            to="/login"
            className="hidden md:block bg-white px-8 py-2 rounded-full"
          >
            Sign in
          </Link>
        ) : (
          <div className="hidden md:flex items-center gap-4 text-white">
            <p className="font-semibold">👤 {user.name}</p>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-5 py-2 rounded-full"
            >
              Logout
            </button>
          </div>
        )}

       
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="menu"
          className="md:hidden w-7 cursor-pointer"
        />
      </div>

      
      <div className={`md:hidden ${showMobileMenu ? "fixed w-full" : "h-0 w-0"} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="close"
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2">About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2">Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className="px-4 py-2">Testimonials</a>

          
          {!user ? (
            <Link
              to="/login"
              onClick={() => setShowMobileMenu(false)}
              className="mt-4 bg-black text-white px-6 py-2 rounded-full"
            >
              Sign in
            </Link>
          ) : (
            <div className="flex flex-col items-center gap-3 mt-4">
              <p className="font-semibold">👤 {user.name}</p>
              <button
                onClick={() => {
                  logout();
                  setShowMobileMenu(false);
                }}
                className="bg-red-600 text-white px-6 py-2 rounded-full"
              >
                Logout
              </button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
