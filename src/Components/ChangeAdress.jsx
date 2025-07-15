import React, { useState } from 'react'

const ChangeAdress = ({setAdress,setIsModelOpen}) => {
    const [newAdress,setNewAdress]=useState('')
    const onClose=()=>{
        setAdress(newAdress)
        setIsModelOpen(false)
    }
    
  return (
    <div>
        <input type="text" 
        placeholder='Enter new adress'
        className='border p-2 w-full mb-4'
        onChange={(e)=>setNewAdress(e.target.value)}
        />
        <div className='flex justify-end'>
            <button className='bg-red-500 text-white py-2 px-4 rounded mr-2' onClick={()=>{setIsModelOpen(false)}}>Cancel</button>
            <button className='bg-blue-500 text-white py-2 px-4 rounded ' onClick={onClose}>Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAdress