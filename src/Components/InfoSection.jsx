import React from 'react'
import { faHeadset, faLock, faMoneyBillWave, faShippingFast, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InfoSection = () => {
    const infoItems = [
        {
            icon: <FontAwesomeIcon icon={faShippingFast} className='text-3xl text-red-600' />,
            title: 'Free Shipping',
            description: 'Get your orders delivered with no extra cost'
        },
        {
            icon: <FontAwesomeIcon icon={faHeadset} className='text-3xl text-red-600' />,
            title: 'Support 24/7',
            description: 'We are here to assist you anytime'
        },
        {
            icon: <FontAwesomeIcon icon={faMoneyBillWave} className='text-3xl text-red-600' />,
            title: '100% Moey Back',
            description: 'full refund if you are not satisfied'
        },
        {
            icon: <FontAwesomeIcon icon={faLock} className='text-3xl text-red-600' />,
            title: 'Payment Secure',
            description: 'Your payment information issafe with us'
        },
        {
            icon: <FontAwesomeIcon icon={faTag} className='text-3xl text-red-600' />,
            title: 'Discount',
            description: 'Enjoy the best prices on our products'
        },
    ]
    return (
        <div className='bg-white pb-8 pt-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4'>
                {infoItems.map((item, i) => (
                    <div key={i} className='bg-white flex flex-col items-center text-center p-4 border rounded-lg
        shadow-md  transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                        {item.icon}
                        <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                        <p className='mt-2 text-gray-600'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfoSection
