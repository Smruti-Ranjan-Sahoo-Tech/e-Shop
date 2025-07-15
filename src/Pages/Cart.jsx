import { useDispatch, useSelector } from 'react-redux'
import emptyCart from '../assets/images/emptyCart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Modal from '../Components/Modal'
import ChangeAdress from '../Components/ChangeAdress'
import { removeFromCart, increaseProductQuantity, decreaseProductQuantity } from '../Redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [adress, setAdress] = useState('main stret , 0012')
  const [isModelOpen, setIsModelOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {
        cart.product.length > 0 ?
          <div>
            <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
            <div className="flex flex-col md:flex-row justify-between mt-8 space-y-6 md:space-y-0 md:space-x-10">
              <div className="md:w-2/3">
                <div className="flex justify-between border-b pb-2 mb-4 text-xs font-bold">
                  <p className="w-1/3">PRODUCTS</p>
                  <div className="flex justify-between w-2/3">
                    <p className="w-1/4 text-center">PRICE</p>
                    <p className="w-1/4 text-center">QUANTITY</p>
                    <p className="w-1/4 text-center">SUBTOTAL</p>
                    <p className="w-1/4 text-center">REMOVE</p>
                  </div>
                </div>

                {cart.product.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    {/* Product Info */}
                    <div className="flex items-center space-x-4 w-1/3">
                      <img
                        src={product.url}
                        alt={product.name}
                        className="size-16 object-cover border rounded"
                      />
                      <div>
                        <p className="text-sm font-semibold">{product.title}</p>
                        <p className="text-xs text-gray-500">{product.description}</p>
                      </div>
                    </div>

                    {/* Price / Quantity / Subtotal / Remove */}
                    <div className="flex justify-between items-center w-2/3 text-center">
                      <p className="w-1/4">${product.price.toFixed(2)}</p>

                      {/* Quantity with + / - */}
                      <div className="w-1/4 flex items-center justify-center space-x-2">
                        <button
                          onClick={() => { dispatch(decreaseProductQuantity(product.id)) }}
                          className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
                        >
                          –
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
                          onClick={() => { dispatch(increaseProductQuantity(product.id)) }}
                        >
                          +
                        </button>
                      </div>

                      <p className="w-1/4">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <button
                        className="w-1/4 text-red-500 hover:text-red-700  cursor-pointer"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="md:w-1/3 bg-gray-100 p-6 rounded-2xl shadow-md">
                <div className="cart-summary space-y-4">
                  <h3 className="text-xl font-bold border-b pb-2">Cart Total</h3>

                  {/* Total Items */}
                  <div className="summary-item flex justify-between text-sm border-b border-gray-300">
                    <span className="font-medium text-gray-700">Total Items:</span>
                    <span className="text-gray-800">{cart.totalQuantity}</span>
                  </div>


                  {/* Shipping Info */}
                  <div className="summary-item text-sm  border-b border-gray-300 pb-2">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">Shipping:</span>
                      <span className="text-gray-800">Shipping To</span>
                    </div>
                    <p className="text-gray-600 text-xs mb-2 ml-1">{adress}</p>
                    <button className="text-blue-600 text-xs hover:underline hover:text-blue-800 transition"
                      onClick={() => { setIsModelOpen(true) }}
                    >
                      Change Address
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="summary-item flex justify-between text-base font-semibold">
                    <span>Total Price:</span>
                    <span className="text-green-600">${cart.totalPrice.toFixed(2)}</span>
                  </div>

                  {/* Checkout Button (Optional) */}
                  <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer" onClick={()=> navigate('/checkout')}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>

            </div>
            <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} >
              <ChangeAdress setIsModelOpen={setIsModelOpen} setAdress={setAdress} />
            </Modal>
          </div>
          :
          <div className='flex justify-center min-h-[70vh] items-center flex-col'>
            <img src={emptyCart} alt="Empty Cart" className='h-96 ' />
          </div>
      }
    </div>
  )
}

export default Cart
