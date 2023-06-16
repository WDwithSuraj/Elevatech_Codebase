import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Home } from './Home'
import { Product } from './Product'

import Singleproductpage from '../components/Singleproductpage'

import { Admin } from './Admin'

export const AllPages = () => {
    return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>

        {/* //put single product page inside private route  */}
        <Route path='/products/:id' element={<Singleproductpage />} />

        <Route path='/admin' element={<Admin/>}/>

      </Routes>
    )
}
