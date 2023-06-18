import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Home } from './Home'
import { Product } from './Product'

import Singleproductpage from '../components/Singleproductpage'




import { Admin } from './Admin'

import Cartpage from './Cartpage'

import Payment from './Payment'
import Login from './Login'
import { SignUp } from './SignUp'
import { PrivateRoute } from '../components/PrivateRoute'




export const AllPages = () => {
    return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>

        <Route path='/products/cart' element={<PrivateRoute><Cartpage/></PrivateRoute>} />

        {/* //put single product page inside private route  */}
        <Route path='/products/:user_id' element={<PrivateRoute><Singleproductpage /></PrivateRoute>} />
        <Route path='/admin' element={<Admin/>}/>

        <Route path='/payment' element={<PrivateRoute><Payment/></PrivateRoute>}/>
        <Route path="*" element={<h2>Page not found 404</h2>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />


      </Routes>
    )
}
