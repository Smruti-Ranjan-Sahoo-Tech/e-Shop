import React, { useState } from 'react'
import { catagories, fetchMockData, fallbackData, fetchCategories } from '../assets/mockData'
import HeroImage from '../assets/images/hero-img.png'
import InfoSection from '../Components/InfoSection'
import CatagorySection from '../Components/CatagorySection'
import { setProduct, setLoading, setError } from '../Redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import Shop from './Shop'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CatagoryClick = () => {
    const [newData, setNewData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);

    const LocationData = location.pathname.split('/')[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const category = catagories.find(v => v.slug === LocationData);
                const url = category?.url;
                // console.log(category);


                if (url) {
                    const response = await axios.get(url);
                    const data = response.data.products;
                  
                    const formattedData = data.map((v, i) => ({
                      albumId: 1,
                      id: i + 1,
                      title: v.title,
                      description: v.description,
                      url: v.thumbnail,
                      thumbnailUrl: v.thumbnail,
                      price: v.price
                    }));
                  
                    setNewData(formattedData);
                  }
                   else {
                    navigate('/*'); // Navigate to 404 or fallback
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [LocationData, navigate]);


    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 '>
            <div className='container mx-auto py-4 flex flex-col md:flex-row gap-x-5'>
                <div className='w-full md:w-3/12'>

                    <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATAGORIES</div>
                    <ul className="bg-gray-100 border border-gray-200 max-h-96 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
                        {
                            catagories.map((catagory, index) => (
                                <li key={index} className='flex odd:bg-gray-300 p-3 items-center text-sm font-medium hover:scale-102 cursor-pointer transform transition-transform duration-300 '
                                    onClick={() => { navigate(`/catagory/${catagory.slug}`) }}>
                                    <div className='size-2 rounded-full border border-red-500 mr-2'></div>{catagory.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                    <img src={HeroImage} alt="" className='h-full w-full' />
                    <div className='absolute top-16 left-8'>
                        <p className='text-gray-600 mb-4'>Code wITH rajaismart</p>
                        <h2 className='text-3xl font-bold'>WELCOME TO E-SHOP</h2>
                        <p className='text-xl mt-2.5 font-bold text-gray-800'>MILLIONS + PRODUCTS</p>
                        <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>Show</button>
                    </div>
                </div>
            </div>
            <InfoSection />
            <CatagorySection />



            <div className="px-4 py-8">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Shop</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {newData.map((product, index) => (
                        <div key={index} className="cursor-pointer transition-transform transform hover:scale-105">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CatagoryClick
