import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Order = ({order}) => {
  const Navigate = useNavigate();
  return (
    <div className='min-h-[70vh] bg-gray-100 flex items-center justify-center'>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10 mb-5">
      <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">Thank you for your order</h2>
      <p className="text-gray-700 text-center mb-6">Your order has been placed successfully. You will receive an email confirmation shortly.</p>
      <div className="border-t border-b py-6 mb-6">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p className="text-sm text-gray-600 mb-2">Order Number: <span className="font-bold">{order.orderNumber}</span></p>
        <div className="mb-4">
          <h2 className="font-semibold text-base mb-1">Shipping Information</h2>
          <p className="text-gray-700">{order.shippingInformation.address}</p>
          <p className="text-gray-700">{order.shippingInformation.city}</p>
          <p className="text-gray-700">{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2">Products Ordered</h3>
          <div className="space-y-2">
            {order.products.map((product, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-50 rounded p-2">
                <p className="text-gray-800">{product.title} <span className="text-xs text-gray-500">x {product.quantity}</span></p>
                <p className="text-gray-700">${product.price.toFixed(2)} x {product.quantity}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4 text-lg font-semibold">
            <span>Total Price:</span>
            <span className="text-green-700">${(order.totalPrice).toFixed(2)}</span>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded transition  cursor-pointer ">Order Tracking</button>
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded transition cursor-pointer"
            onClick={()=>{Navigate('/')}}
            >Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Order