import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Brand Description */}
        <div>
          <h3 className='text-xl font-semibold'>e-Shop</h3>
          <p className='mt-4'>
            Your one-stop for all your needs. Shop with us and experience the best online shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li><Link className='hover:underline' to='/'>Home</Link></li>
            <li><Link className='hover:underline' to='/shop'>Shop</Link></li>
            <li><Link className='hover:underline' to='/contact'>Contact</Link></li>
            <li><Link className='hover:underline' to='/about'>About</Link></li>
          </ul>
        </div>

        {/* Follow & Newsletter */}
        <div>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href="#" className='hover:text-gray-400'><FaFacebook /></a>
            <a href="#" className='hover:text-gray-400'><FaTwitter /></a>
            <a href="#" className='hover:text-gray-400'><FaInstagram /></a>
            <a href="#" className='hover:text-gray-400'><FaLinkedin /></a>
          </div>
          <form className='flex items-center mt-8'>
            <input
              type="email"
              placeholder='Enter Email'
              className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600'
            />
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600 border-l-0'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='mt-8 border-t border-gray-700 pt-4 w-full'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 e-Shop. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="#" className='hover:underline'>Privacy Policy</a>
            <a href="#" className='hover:underline'>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
