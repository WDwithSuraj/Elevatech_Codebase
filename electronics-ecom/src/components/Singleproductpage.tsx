import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../redux/store'
import styled from 'styled-components'
import Starrating from './Starrating'
import { addproductaction } from '../redux/action'

import {Link} from "react-router-dom"


const Singleproductpage = () => {

    const { user_id } = useParams()
    const ProductData = useSelector((store: RootState) => store.productReducer.product)
    const dataproductaddedtotal = useSelector((store: RootState) => store.cartReducer.cartproduct)
    // console.log(dataproductaddedtotal, "here")
    const dispatch = useDispatch()



    let particularProduct = ProductData.filter((ele, index) => {
        if (ele.id === Number(user_id)) {
            return true
        } else {
            return false
        }
    })

    console.log(dataproductaddedtotal);


    const [{id, image, category, brand, rating, rated_by, description, price, color }] = particularProduct
    const [cardimage, setCardImage] = useState(image[0])

    // console.log(image,"herreid ")



    const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        // const quantity=1

        let flag = false
        for (let i = 0; i <= dataproductaddedtotal.length - 1; i++) {
            if (dataproductaddedtotal[i].id === user_id) {
                flag = true
                alert("product already in cart")
                break;
            }
        }

        if (flag === false) {
            alert("product added to cart")
            dispatch(addproductaction({id, image, category, brand, rating, rated_by, description, price, color,quantity:1 }))
        }
    }



    return (
        <WRAPPER>
            <div className='card_img_pics'>
                <div className='side_img_cards'>
                    <img onClick={() => setCardImage(image[0])} className='side_card' src={image[0]} alt="" />
                    <img onClick={() => setCardImage(image[1])} className='side_card' src={image[1]} alt="" />
                    <img onClick={() => setCardImage(image[2])} className='side_card' src={image[2]} alt="" />
                    <img onClick={() => setCardImage(image[3])} className='side_card' src={image[3]} alt="" />
                </div>
                <div className='main_img_card'>
                    <img src={cardimage} alt="" />
                </div>

            </div>
            <div className='card_detail'>
                <h2> {brand.toUpperCase()}  {category.toUpperCase()}</h2>
                <div>
                    <Starrating rating={rating} review={rated_by} />
                    <span className='review'>{`   (${rated_by} reviews)`} </span>
                </div>
                <h5 className='price'>{`MRP:₹${price}.00`}</h5>
                <p>{description}</p>
                <p>Available: <b style={{ color: "green" }}>In Stock</b></p>
                <p>Color: <b>{color}</b></p>
                <p className='brand_single_product'>Brand: <b style={{ color: "blue" }}>{brand.toUpperCase()}</b></p>
                <button onClick={handleAddProduct} className='cart_btn'>Add To Cart</button>

            </div>
            <Link to="/products/cart">click to cart</Link>
        </WRAPPER>
    )
}

export default Singleproductpage

const WRAPPER = styled.div`

/* border:3px solid green; */
width:80%;
display:flex;
justify-content:center;

margin:auto;

 img{
    cursor:pointer;
 }

  .card_img_pics{
    /* border:4px solid red; */
   display:flex;
   justify-content:space-around;
   align-items:center;
   /* border:3px solid pink; */
   width:35%;
   margin-right:40px;


  }

   .side_img_cards{
   display:flex;
   flex-direction:column;
 

  

   }
      .side_card{
        border:2px solid grey;
        width:90px;
        height:100px;
        margin:7px;
        padding:10px;
        border-radius:12px;
      }
      

      .main_img_card img{
        width:200px;
        height:240px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding:25px;
        border-radius:13px;
     
      }

    
    

      .card_detail{
        width:30%;
        /* border:3px solid purple; */
      }


     .review{
    position:relative;
    bottom:1px;
    
}

.brand_single_product{
    border-bottom:3px solid grey;
   padding-bottom:30px;
}

.cart_btn{
    padding:10px 19px;
    font-size:16px;
    font-weight:600;
    background-color:lightgreen;
    border-radius:14px;
}

.price {
    border-bottom:3px solid grey;
    padding-bottom:30px;
}

`