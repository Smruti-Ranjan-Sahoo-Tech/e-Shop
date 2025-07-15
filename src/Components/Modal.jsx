import React from 'react'

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
    if (!isModelOpen) return null;
    return (
        <div className='fixed inset-0 bg-gray-500/90 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
                <button className='absolute top-4 right-4 text-red-600 text-3xl cursor-pointer' onClick={()=>{setIsModelOpen(false)}}>&times;</button>
               <div className="mt-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
