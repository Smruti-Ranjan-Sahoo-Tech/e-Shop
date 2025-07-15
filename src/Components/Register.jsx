import React, { useState } from 'react'

const Register = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration attempt:', formData);
  };

  return (
    <div className="p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type='password'
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
            </div>
           <div>
                <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition  cursor-pointer"
                >
                    Sign Up
                </button>
            </div>
        </form>
        <div className="mt-6 text-center">
            <span className="text-gray-600">Already Have an Account?</span>
            <button
                type="button"
                className="ml-2 text-red-500 hover:underline font-semibold cursor-pointer"
                onClick={() => setIsLogin(true)}
            >
                Login
            </button>
        </div>
    </div>
  )
}

export default Register