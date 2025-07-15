import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import { setProduct, setLoading, setError } from '../Redux/productSlice'
import { fetchMockData, fallbackData } from '../assets/mockData'

const Shop = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    
    useEffect(() => {
        const loadProducts = async () => {
            try {
                dispatch(setLoading(true))
                const data = await fetchMockData()
                if (data.length > 0) {
                    dispatch(setProduct(data))
                } else {
                    dispatch(setProduct(fallbackData))
                }
            } catch (error) {
                console.error('Error loading products:', error)
                dispatch(setError('Failed to load products'))
                dispatch(setProduct(fallbackData))
            }
        }
        
        // Load products if they're not already loaded
        if (products.product.length === 0) {
            loadProducts()
        }
    }, [dispatch, products.product.length])
    
    return (
        <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
            {products.loading ? (
                <div className='text-center py-8'>
                    <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600'></div>
                    <p className='mt-2 text-gray-600'>Loading products...</p>
                </div>
            ) : products.error ? (
                <div className='text-center py-8'>
                    <p className='text-red-600'>{products.error}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {products.product.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                    }
                </div>
            )}
        </div>
    )
}

export default Shop
