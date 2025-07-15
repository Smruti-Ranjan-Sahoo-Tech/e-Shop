import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faUser, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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
        console.log('Contact form submitted:', formData);
        // Add your contact form logic here
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
                <div className="container mx-auto px-4 md:px-16 lg:px-24 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Get in touch with us. We'd love to hear from you and answer any questions you might have.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-16 lg:px-24 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We're here to help and answer any questions you might have. We look forward to hearing from you.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
                                    <p className="text-gray-600">123 Shopping Street, E-Commerce City, EC 12345</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faPhone} className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Phone Number</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Email Address</h3>
                                    <p className="text-gray-600">info@eshop.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faClock} className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Working Hours</h3>
                                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">Name</label>
                                    <div className="relative">
                                        <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                            placeholder="Your name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">Email</label>
                                    <div className="relative">
                                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faMessage} className="absolute left-3 top-3 text-gray-400" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="5"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent resize-none"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact 