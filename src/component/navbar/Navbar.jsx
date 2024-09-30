import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdPhone, MdEmail } from 'react-icons/md';  
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';  
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { CiSearch, CiShoppingCart } from "react-icons/ci";  
import Button from '../common/Button';
import logo from "../../assets/Logo (1).png";
import logoName from "../../assets/Indiashop.png";

export default function Navbar() {
  const navigate = useNavigate();


  const submitHandler = () => {
    navigate("/become-seller")
  }

  return (
    <div>
      {/* Top Navbar */}
      <div className='bg-black text-[14px] p-2 md:px-[8%] text-white flex flex-row justify-between items-center w-full'>
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
            <Link to='/login' className='flex flex-row justify-center items-center'>
              <FaSignInAlt className='mr-2' /> Login
            </Link>
            <div className='border-[1px] border-white h-[20px] w-[2px]'></div>
            <Link to='/register' className='flex flex-row justify-center items-center'>
              <FaUserPlus className='mr-2' /> Register
            </Link>
          </div>

          <div className='flex flex-row gap-3'>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook style={{ width: "18px", height: "18px" }} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={{ width: "18px", height: "18px" }} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ width: "18px", height: "18px" }} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ width: "18px", height: "18px" }} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ width: "18px", height: "18px" }} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className=' py-2  w-full md:px-[8%]  mx-auto flex felx-row justify-center items-center ' >
        <div className=' w-[100%] flex flex-row justify-center items-center gap-4 ' >
          <NavLink to="/" className="flex gap-2 " >
          <img src={logo} alt='logo' />
          <img src={logoName} alt='logoName' />
          </NavLink>

          <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-green font-semibold" : "text-gray-400 font-semibold"
  }
>
  HOME
</NavLink>

<NavLink
  to="/order-on-demand"
  className={({ isActive }) =>
    isActive ? "text-green font-semibold" : "text-gray-400 font-semibold"
  }
>
  ORDER ON DEMAND
</NavLink>

<NavLink
  to="/category"
  className={({ isActive }) =>
    isActive ? "text-green font-semibold" : "text-gray-400 font-semibold"
  }
>
  CATEGORY
</NavLink>


            <div className=' w-[20%] flex flex-row justify-center items-center border-2 gap-2 rounded-lg border-gray-300 ' >
            <CiSearch />
            <input placeholder='Search for anything' />
          </div>

          <div className=' flex gap-5 flex-row justify-center items-center' >
            <CiShoppingCart style={{width:"25px", height:"25px"}} className=' text-green ' />
            <Button onClick={submitHandler} content={"Become a Seller"} icon={"CiShop"} />
          </div>
        </div>

        
      </div>
    </div>
  );
}
