import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { use } from 'react'
import { addToCart } from '../Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {
  const dispatch=useDispatch()
  const handleAddToCart = (e,product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
  }
  return (
    <Link to={`/product/${product.id}`}>
    <div className='bg-white p-4 shadow rounded relative border 
    transform transition-transform duration-300 hover:scale-105'>
      <img src={product.url} alt=""
      className='w-full h-48 object-contain mb-4' />
      <h3 className='text-lg font-semibold'>{product.title}</h3>
      <p className='text-gray-500'>$ {product.price}</p>
      <div>
        <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
        <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
        <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
        <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
      </div>
      <div className='absolute bottom-4 right-2 flex items-center justify-center size-8 bg-red-600
      group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100'
      onClick={(e)=>{handleAddToCart(e,product)}}>
        <span className='group-hover:hidden font-extrabold'>+</span>
        <span className='hidden group-hover:block'>Add to Cart</span>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
