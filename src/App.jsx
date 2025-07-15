import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import CheakOut from './Pages/CheakOut'
import NotFound404 from './Pages/NotFound404'
import Order from './Pages/Order'
import Contact from './Pages/Contact'
import About from './Pages/About'
import FilterData from './Pages/FilterData'
import SingleProduct from './Pages/SingleProduct'
import CatagoryClick from './Pages/CatagoryClick'


function App() {
    const [order, setOrder] = useState([null])
    useEffect(() => {
      console.log('Order state changed:', order);
      
    }, [order])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheakOut setOrder={setOrder} />} />
        <Route path='/order-conformation' element={<Order order={order} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/filter-data' element={<FilterData />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/catagory/:slug' element={<CatagoryClick />} />
        <Route path="*" element={<NotFound404 />} />
         
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}

export default App
