import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheakOut = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingIfo] = useState([
    {
      address: '',
      city: '',
      zip: ''
    }
  ])
  const cart = useSelector(state => state.cart)
  const navigate = useNavigate()
  const handaleOrder = () => {
    const newOrder = {
      products: cart.product,
      orderNumber: Math.floor(Math.random() * 1000000),
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    }
    setOrder(newOrder);
    navigate('/order-conformation');
  }

  return (
    <div className='container flex flex-col sm:flex-row gap-4 mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>

      <div className="md:w-2/3">
        <h1 className="text-center text-3xl font-bold mb-10">CHECKOUT</h1>
        <div className="flex flex-col gap-4 items-center justify-center">

          {/* Billing Information */}
          <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white max-w-xl w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Billing Information</h3>
              <span
                className={`cursor-pointer transition-transform duration-300 ease-in-out ${billingToggle ? "rotate-180" : ""}`}
                onClick={() => setBillingToggle(!billingToggle)}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </div>

            <form
              className={`space-y-4 p-2 overflow-hidden transition-all duration-300 ease-in-out ${billingToggle ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            >
              <div>
                <label htmlFor="billing-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="billing-name"
                  placeholder="Enter your name"
                  className="mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="billing-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="billing-email"
                  placeholder="Enter your email"
                  className="mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="billing-phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="billing-phone"
                  placeholder="Enter your phone number"
                  className="mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </form>
          </div>

          {/* Shipping Information */}
          <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white max-w-xl w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Shipping Information</h3>
              <span
                className={`cursor-pointer transition-transform duration-300 ease-in-out ${shippingToggle ? "rotate-180" : ""}`}
                onClick={() => setShippingToggle(!shippingToggle)}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </div>

            <form
              className={`space-y-4 p-2 overflow-hidden transition-all duration-300 ease-in-out ${shippingToggle ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            >
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  className="mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  onChange={(e) => setShippingIfo({ ...shippingInfo, address: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  className="mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  onChange={(e) => setShippingIfo({ ...shippingInfo, city: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input
                  type="text"
                  id="zip"
                  placeholder="Enter your zip code"
                  className="mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  onChange={(e) => setShippingIfo({ ...shippingInfo, zip: e.target.value })}
                />
              </div>
            </form>

          </div>

          {/* Payment Method */}
          <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white max-w-xl w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Payment Method</h3>
              <span
                className={`cursor-pointer transition-transform duration-300 ease-in-out ${paymentToggle ? "rotate-180" : ""}`}
                onClick={() => setPaymentToggle(!paymentToggle)}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </div>

            <form
              className={`space-y-4 p-2 overflow-hidden mt-2 transition-all duration-300 ease-in-out ${paymentToggle ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            >
              <div className='flex items-center gap-2'>
                <input type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod('cod')}

                />
                <label className="block text-sm font-medium text-gray-700">Cash on Delivery</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}

                />
                <label className="block text-sm font-medium text-gray-700">Debit Card</label>
              </div>
              {paymentMethod === "dc" && (
                <div
                  className={`space-y-4 p-4 overflow-hidden transition-all duration-300 ease-in-out 
      ${paymentMethod === "dc" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
    `}
                >
                  <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        id="cardHolder"
                        name="cardHolder"
                        placeholder="John Doe"
                        className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="flex-1">
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                          CVV
                        </label>
                        <input
                          type="password"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}


            </form>
          </div>
        </div>

      </div>
      <div className="md:w-1/3 bg-gray-100 p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Order Summery</h3>
        <div className="space-y-4">
          {cart.product.map((product, idx) => (
            <div key={product.id || idx} className="flex items-center gap-4 bg-white p-3 rounded shadow-sm">
              <img src={product.url} alt="" className="w-16 h-16 object-contain rounded border" />
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-1">{product.title}</h3>
                <p className="text-sm text-gray-600 flex justify-between">
                  {product.price} x {product.quantity}  <span className="font-bold">${(product.price * product.quantity).toFixed(2)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6 text-lg font-semibold border-t border-gray-400 pt-3">
          <span>Total Price</span>
          <span>${cart.totalPrice.toFixed(2)}</span>
        </div>
        <div>
          <button className="w-full mt-6 bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
            onClick={handaleOrder}
          >Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default CheakOut