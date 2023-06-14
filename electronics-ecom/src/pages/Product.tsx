import React, { useEffect } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import axios from 'axios'
import { fetcFailureAction, fetchRequestAction, fetchSuccessAction } from '../redux/action'
import { Productcard } from '../components/Productcard'

export const Product = () => {



  const productData = useSelector((store: RootState) => store.productReducer.product)
  const dispatch = useDispatch()


  console.log(productData, "inproduct")


  const getProductData = () => {
    dispatch(fetchRequestAction())
    axios.get(`https://shy-puce-binturong-ring.cyclic.app/electronics`)
      .then((res) => {
        dispatch(fetchSuccessAction(res.data))
        // console.log(res.data)
      })
      .catch((error) => {
        dispatch(fetcFailureAction())
        console.log(error)
      })
  }

  useEffect(() => {
    getProductData()

  }, [])



  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <Sidebar />
      <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr", width:"80%"}} >
          {
            productData?.map((item)=>{
           return <Productcard  key={item.id}{...item} />
            })
          }
      </div>


    </div>
  )
}
