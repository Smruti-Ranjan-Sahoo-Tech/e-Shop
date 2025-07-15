import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faAward, faShieldAlt, faHeart, faLightbulb, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faHandshake, faStar } from '@fortawesome/free-regular-svg-icons'
import raja from '../assets/images/raja.png'
const About = () => {
    
    const teamMembers = [
        {
            name: "Smruti Ranjan Sahoo",
            position: "CEO & Founder",
            image: raja,
            description: "10+ years in e-commerce leadership"
        },
        {
            name: "Michael Chen",
            position: "CTO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            description: "Expert in digital transformation"
        },
        {
            name: "Emily Rodriguez",
            position: "Head of Design",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            description: "Creating exceptional user experiences"
        },
        {
            name: "David Thompson",
            position: "Customer Success",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            description: "Ensuring customer satisfaction"
        }
    ];

    const values = [
        {
            icon: faHeart,
            title: "Customer First",
            description: "Every decision we make is centered around our customers' needs and satisfaction."
        },
        {
            icon: faShieldAlt,
            title: "Trust & Security",
            description: "We prioritize the security and privacy of our customers' data above everything else."
        },
        {
            icon: faLightbulb,
            title: "Innovation",
            description: "Constantly evolving and improving our platform to provide the best shopping experience."
        },
        {
            icon: faHandshake,
            title: "Integrity",
            description: "Honest, transparent, and ethical in all our business practices."
        }
    ];

    const milestones = [
        { year: "2020", title: "Founded", description: "e-Shop was born with a vision to revolutionize online shopping" },
        { year: "2021", title: "10K Customers", description: "Reached our first major milestone of 10,000 happy customers" },
        { year: "2022", title: "Global Expansion", description: "Expanded to serve customers in 50+ countries worldwide" },
        { year: "2023", title: "Award Winner", description: "Recognized as 'Best E-commerce Platform' by Tech Awards" },
        { year: "2024", title: "Future Ready", description: "Investing in AI and next-generation shopping technologies" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
                <div className="container mx-auto px-4 md:px-16 lg:px-24 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About e-Shop</h1>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                        We're more than just an e-commerce platform. We're a community of innovators, 
                        creators, and dreamers working together to make online shopping better for everyone.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-16 lg:px-24 py-12">
                {/* Our Story Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Founded in 2020, e-Shop began as a small startup with a big dream: to make online shopping 
                                accessible, convenient, and enjoyable for everyone. What started as a simple idea has grown 
                                into one of the most trusted e-commerce platforms in the world.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our journey began when our founder, Sarah Johnson, experienced the frustration of poor 
                                online shopping experiences. She envisioned a platform that would put customers first, 
                                offering not just products, but an entire shopping experience that felt personal and secure.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Today, we serve millions of customers across 50+ countries, offering everything from 
                                everyday essentials to unique finds from around the world. But our mission remains the same: 
                                to make shopping better for everyone.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-8">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faUsers} className="text-red-600 text-6xl mb-4" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">1M+ Happy Customers</h3>
                                <p className="text-gray-600">Trusting us with their shopping needs</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faStar} className="text-red-600 text-2xl mr-3" />
                            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            To provide an exceptional online shopping experience that connects people with quality products 
                            while maintaining the highest standards of security, customer service, and innovation.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faGlobe} className="text-red-600 text-2xl mr-3" />
                            <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            To become the world's most customer-centric e-commerce platform, where shopping is not just 
                            a transaction, but an experience that brings joy and convenience to people's lives.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FontAwesomeIcon icon={value.icon} className="text-red-600 text-xl" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-red-600 font-medium mb-2">{member.position}</p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Milestones Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Journey</h2>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-200"></div>
                        
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                        <div className="bg-red-600 text-white p-4 rounded-lg shadow-lg">
                                            <div className="text-2xl font-bold mb-1">{milestone.year}</div>
                                            <div className="text-lg font-semibold mb-2">{milestone.title}</div>
                                            <div className="text-sm opacity-90">{milestone.description}</div>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">By The Numbers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">1M+</div>
                            <div className="text-lg">Happy Customers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-lg">Products Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-lg">Countries Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-lg">Customer Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 