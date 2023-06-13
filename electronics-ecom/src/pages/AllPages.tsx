import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Home } from './Home'
import { Product } from './Product'
export const AllPages = () => {
    return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
      </Routes>
    )
}
