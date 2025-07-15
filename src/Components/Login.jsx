import React, { useState } from 'react'
import Register from './Register';

const Login = ({ setIsLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login attempt:', formData);
    };

    return (
        <div className="p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
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
                <div className="flex items-center justify-between">
                    <label className="flex items-center text-gray-600">
                        <input 
                            type='checkbox' 
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleInputChange}
                            className="mr-2 accent-red-500" 
                        />
                        <span>Remember Me</span>
                    </label>
                    <button type="button" className="text-red-500 hover:underline text-sm">Forget Password?</button>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer transition"
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className="mt-6 text-center">
                <span className="text-gray-600">Don't Have an Account?</span>
                <button
                    type="button"
                    className="ml-2 text-red-500 hover:underline font-semibold"
                    onClick={() => setIsLogin(false)}
                >
                    Sign Up
                </button>
            </div>
            
        </div>

    )
}

export default Login