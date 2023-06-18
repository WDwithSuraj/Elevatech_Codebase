import React from 'react'
import {useSelector} from "react-redux"
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../redux/store';


export const PrivateRoute = ({children} : any) => {
    const location = useLocation();
    const isAuth = useSelector((store:RootState)=> store.authReducer.isAuth)
  return  isAuth? children : <Navigate state={location.pathname} to={"/login"}/>
  
}
