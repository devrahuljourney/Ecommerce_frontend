import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import Button from '../common/Button';
import logo from "../../assets/Logo (1).png";
import logoName from "../../assets/Indiashop.png";
import { IoMdCart } from "react-icons/io";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const submitHandler = () => {
    navigate("/become-seller");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Navbar - Hidden in mobile view */}
      <div className='bg-black text-[14px] p-2 md:px-[8%] text-white flex flex-row justify-between items-center w-full hidden md:flex'>
        <div className='flex w-[50%] justify-center items-center space-x-4'>
          <p className='flex items-center'>
            <a href="tel:+1234567890" className='flex justify-center flex-row items-center'>
              <MdPhone className='mr-2' /> +123 456 7890
            </a>
          </p>
          <p className='flex items-center'>
            <a href="mailto:example@email.com" className='flex justify-center flex-row items-center'>
              <MdEmail className='mr-2' /> example@email.com
            </a>
          </p>
        </div>

        <div className='flex w-[50%] justify-evenly items-center'>
          <div className='flex flex-row justify-center items-center gap-3'>
            <Link to='/login' className='flex flex-row justify-center items-center hover:text-green-500'>
              <FaSignInAlt className='mr-2' /> Login
            </Link>
            <div className='border-[1px] border-white h-[20px] w-[2px]'></div>
            <Link to='/register' className='flex flex-row justify-center items-center hover:text-green-500'>
              <FaUserPlus className='mr-2' /> Register
            </Link>
          </div>

          <div className='flex flex-row gap-3'>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='hover:text-green-500' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='hover:text-green-500' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='hover:text-green-500' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='hover:text-green-500' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className='hover:text-green-500' />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className='py-2 w-[80%] lg:ml-[17%] mx-auto flex flex-row justify-between md:justify-center items-center'>
        <NavLink to="/" className="flex lg:w-[10%] md:w-[30%] gap-2">
          <img src={logo} alt='logo' />
          <img src={logoName} alt='logoName' />
        </NavLink>

        {/* Desktop Menu */}
        <div className='hidden w-[80%] md:flex md:flex-grow lg:flex-row justify-center items-center gap-4'>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-green font-semibold" : "text-gray-400 font-semibold hover:text-green-500"}>
            HOME
          </NavLink>
          <NavLink to="/order-on-demand" className={({ isActive }) => isActive ? "text-green font-semibold" : "text-gray-400 font-semibold hover:text-green-500"}>
            ORDER ON DEMAND
          </NavLink>
          <NavLink to="/category" className={({ isActive }) => isActive ? "text-green font-semibold" : "text-gray-400 font-semibold hover:text-green-500"}>
            CATEGORY
          </NavLink>
          <div className='w-[25%] flex flex-row justify-center items-center border-2 gap-2 rounded-lg border-gray-300 px-2 py-1'>
            <CiSearch style={{width:"25px", height:"25px"}} className='text-gray-500' />
            <input placeholder='Search for anything' className='w-full outline-none bg-transparent' />
          </div>
          <IoMdCart style={{width:"25px", height:"25px"}} className='text-green text-2xl' />
          <Button onClick={submitHandler} content={"Become a Seller"} icon={"CiShop"} />
        </div>

        {/* Mobile Menu Icon */}
        <div className='flex md:hidden'>
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu - Left Side Sliding */}
      <div className={`fixed md:hidden top-0 left-0 h-full bg-black text-white w-[250px] z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className='flex justify-between p-4'>
          <h2 className='text-lg font-semibold'>Menu</h2>
          <FaTimes className="text-xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <nav className='flex flex-col p-4'>
          {/* Search on Top in Mobile View */}
          <div className='flex flex-row items-center border-2 gap-2 rounded-lg border-gray-300 p-2 mb-4'>
            <CiSearch />
            <input placeholder='Search for anything' className="bg-black text-white w-full outline-none" />
          </div>

          {/* Navigation Links */}
          <NavLink to="/" className="py-2 hover:text-green-500" onClick={toggleMenu}>HOME</NavLink>
          <NavLink to="/order-on-demand" className="py-2 hover:text-green-500" onClick={toggleMenu}>ORDER ON DEMAND</NavLink>
          <NavLink to="/category" className="py-2 hover:text-green-500" onClick={toggleMenu}>CATEGORY</NavLink>

          {/* Shopping Cart and Seller Button */}
          <div className='flex items-center py-2'>
            CART
          </div>
          <div className='flex items-center py-2'>
            <Button onClick={submitHandler} content={"Become a Seller"} icon={"CiShop"} />
          </div>

          {/* Login and Register at Bottom */}
          <div className='flex shadow-sm  shadow-gray-200 absolute bottom-0 w-full left-0 p-2 flex-row py-2 justify-between'>
            <Link to='/login' className='flex flex-row justify-center items-center py-2 hover:text-green-500' onClick={toggleMenu}>
              <FaSignInAlt className='mr-2' /> Login
            </Link>
            <Link to='/register' className='flex flex-row justify-center items-center py-2 hover:text-green-500' onClick={toggleMenu}>
              <FaUserPlus className='mr-2' /> Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
