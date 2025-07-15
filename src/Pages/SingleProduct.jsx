import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../Redux/cartSlice';
import { useDispatch } from 'react-redux';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleProduct = () => {
  
  let location=useLocation();
  const currentId=location.pathname.split('/')[2];
  let product = useSelector(state => state.product.product) ;
  let singleData=product.filter((v)=> v.id==currentId)
  const dispatch = useDispatch();
  const productItem = singleData[0];
   
  const handleAddToCart = () => {
    if (productItem) {
      dispatch(addToCart(productItem));
    }
  };

  if (!productItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 p-8 flex items-center justify-center">
              <img
                src={productItem.url}
                alt={productItem.title}
                className="w-full h-96 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {productItem.title}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                </div>
                <span className="ml-2 text-gray-600">(4/5)</span>
              </div>

              <div className="text-3xl font-bold text-green-600 mb-6">
                $ {productItem.price}
              </div>

              <p className="text-gray-600 mb-6">
                {productItem.description}
              </p>

              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Product Features:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-quality materials</li>
                  <li>• Durable construction</li>
                  <li>• Modern design</li>
                  <li>• Easy to maintain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct
