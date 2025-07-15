import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'

const FilterData = () => {
    // Access filteredData from the product slice
    const filteredData = useSelector(state => state.product.filteredData) || [];
    const loading = useSelector(state => state.product.loading);
    const error = useSelector(state => state.product.error);
    
        useEffect(()=>{
      
    },[filteredData])
    
    let content;
    
    if (loading) {
        content = (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Loading products...</p>
            </div>
        );
    } else if (error) {
        content = (
            <div className="text-center py-12">
                <p className="text-red-500 text-lg">{error}</p>
            </div>
        );
    } else if (filteredData.length > 0) {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredData.map((product, index) => (
                    <ProductCard key={product.id || index} product={product} />
                ))}
            </div>
        );
    } else {
        content = (
            <div className="text-center py-12">
                <p className="text-red-500 text-lg">No products found matching your search criteria.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Filtered Products</h2>
            {content}
        </div>
    );
}

export default FilterData;
