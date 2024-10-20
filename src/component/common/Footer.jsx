import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const indiaShop = require("../../assets/Indiashop.png");
const logo = require("../../assets/Logo (1).png") 


export default function Footer() {
  return (
    <div>
        <div>
            <div>
                <img src={logo} alt='indiashop' />
                <img src={indiaShop} alt='logo' />
            </div>
            <p>Your one stop solution. We got you covered!</p>
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
  )
}
