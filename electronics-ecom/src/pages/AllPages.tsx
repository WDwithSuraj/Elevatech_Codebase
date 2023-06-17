import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Home } from './Home'
import { Product } from './Product'

import Singleproductpage from '../components/Singleproductpage'




import { Admin } from './Admin'

import Cartpage from './Cartpage'

import Payment from './Payment'



export const AllPages = () => {
    return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>

        <Route path='/products/cart' element={<Cartpage/>} />

        {/* //put single product page inside private route  */}
        <Route path='/products/:user_id' element={<Singleproductpage />} />
        <Route path='/admin' element={<Admin/>}/>

        <Route path='/payment' element={<Payment/>}/>
        <Route path="*" element={<h2>Page not found 404</h2>}/>


      </Routes>
    )
}
