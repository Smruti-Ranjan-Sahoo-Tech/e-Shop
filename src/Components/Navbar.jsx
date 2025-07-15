import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { setSearchTerm, setProduct, setLoading, setError } from '../Redux/productSlice';
import { fetchMockData } from '../assets/mockData';

const Navbar = () => {
  const product = useSelector((state) => state.cart.product);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState('');
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search.trim() === '') return;
    
    try {
      dispatch(setLoading(true));
      const data = await fetchMockData();
      dispatch(setProduct(data));
      dispatch(setSearchTerm(search));
      navigate('/filter-data');
    } catch (error) {
      dispatch(setError('Failed to fetch products'));
      console.error('Error fetching data:', error);
    }
  }
 
  return (
    <nav
      className={"bg-white shadow-md py-3 sticky top-0 left-0 w-full z-50 animate-fadeIn"}
      style={{ transition: 'top 0.3s' }}
    >
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/">e-Shop</Link>
        </div>

        {/* Search Bar */}
        <form className="relative flex-1 mx-4" onSubmit={(e)=>handleSubmit(e)}>
          <input
            type="text"
            placeholder="Search Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 shadow-sm py-2 px-4"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute top-3 right-3 text-red-400"
          />
        </form>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Link to="/cart" className="relative">
            <FontAwesomeIcon icon={faCartShopping} />
            {product.length > 0 && (
              <span className="absolute -top-2 left-3 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {product.length}
              </span>
            )}
          </Link>

          {/* Auth Buttons */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block"
          >
            Login | Register
          </button>
          <button className="md:hidden">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex items-center justify-center gap-x-10 mt-5 text-sm font-bold">
        {['Home', 'Shop', 'Contact', 'About'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
            className="hover:underline transition-transform duration-300"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Modal */}
      <Modal isModelOpen={isModalOpen} setIsModelOpen={setIsModalOpen}>
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Register setIsLogin={setIsLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
