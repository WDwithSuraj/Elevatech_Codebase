/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import axios from 'axios'
import { fetcFailureAction, fetchRequestAction, fetchSuccessAction } from '../redux/action'
import { Productcard } from '../components/Productcard'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'

interface SearchParamsType {
  category: string[],
  color: string[],
  _sort: string | null,
  _order: string | null
}



export const Product = () => {


  const [searchparams] = useSearchParams()
  const productData = useSelector((store: RootState) => store.productReducer.product)
  const isLoading = useSelector((store: RootState) => store.productReducer.isLoading)
  const dispatch = useDispatch()
  const [page, setPage] = useState<number>(1)

 

 
  let params = {
    category: searchparams.getAll("category"),
    color: searchparams.getAll("color"),
    brand: searchparams.getAll("brand"),
    _sort: searchparams.get("order") && "price",
    _order: searchparams.get("order")
  }
  


  const getProductData = (page: number, params: SearchParamsType) => {
    dispatch(fetchRequestAction())
    axios.get(`https://shy-puce-binturong-ring.cyclic.app/electronics?_page=${page}&_limit=13`, { params })
      .then((res) => {
        dispatch(fetchSuccessAction(res.data))



        
        console.log(res.data)
      })
      .catch((error) => {
        dispatch(fetcFailureAction())
        console.log(error)
      })
  }

  useEffect(() => {
    getProductData(page, params)

  }, [page, searchparams])



  return (

      isLoading ? 
        <div  style={{ margin:"auto", width:"fit-content"}}>
      <img src="https://i0.wp.com/static.onemansblog.com/wp-content/uploads/2016/05/clock-loading.gif" alt="loading_img" /> 
      
      </div>
      :
    <WRAPPER>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Sidebar />
        <div style={{ display: 'grid',gap:"8px", gridTemplateColumns: "repeat(4,1fr)", width: "80%",height:"fit-content"}} >
          {
            productData?.map((item) => {
              return <Productcard key={item.id}{...item} />
            })
          }
        </div>


      </div>
      <div className='btn_div_component'>
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <button onClick={() => setPage(3)}>3</button>
      </div>
      <Footer />
    </WRAPPER>
  )
}

const WRAPPER = styled.div`
 
.btn_div_component{
 
  max-width:300px;
  margin:auto;
  display:flex;
  justify-content:center;
  margin-top:20px;
  margin-bottom:20px;
}

.btn_div_component button {
  padding:12px 22px;
  margin-right:8px;
  font-weight:600;

  background-color: #e74326;
  color:white;
  border-radius:12px;
  outline:none;
  border:none;
  cursor:pointer;
  font-size:17px;
}

.btn_div_component button:hover{
  color:black;
}



`
















