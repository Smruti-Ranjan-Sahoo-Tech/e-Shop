import React from 'react'
import ManCatagory from '../assets/images/men.jpg'
import WomanCatagory from '../assets/images/women.jpg'
import KidCatagory from '../assets/images/kid.jpg'



const CatagorySection = () => {
    const catagories = [
        {
            title: 'Men',
            imageUrl: ManCatagory,
        },
        {
            title: 'Women',
            imageUrl: WomanCatagory,
        },
        {
            title: 'Kids',
            imageUrl: KidCatagory,
        }
    ]
    return (
        <div className='mt-5'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12'>
                    {catagories.map((catagory, index) => (
                        <div key={index} className='cursor-pointer lg:h-64 relative  transform transition-transform duration-300 hover:scale-105 hover:shadow-md shadow-orange-300 rounded-xl'>
                            <img src={catagory.imageUrl} className='w-full h-full object-cover  sm:object-top rounded-lg shadow-md' />
                            <div className='absolute top-20 left-12'>
                                <p className='text-xl font-bold text-amber-900 text-shadow-sm text-shadow-black'>{catagory.title}</p>
                                <p className='text-gray-600'>View All</p>
                            </div> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CatagorySection
