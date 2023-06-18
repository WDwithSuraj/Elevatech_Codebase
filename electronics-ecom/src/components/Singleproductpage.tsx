import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../redux/store'
import styled from 'styled-components'
import Starrating from './Starrating'
import { addproductaction } from '../redux/action'
import Swal from 'sweetalert2'

interface ItemTpe {
    image: string[];
    id: number;
    title?: string;
    price: number;
    rating: number;
    rated_by: number;
    category: string,
    brand: string,
    description: string,
    color: string,
}


const Singleproductpage = () => {

    const { user_id } = useParams()
    const dataproductaddedtotal = useSelector((store: RootState) => store.cartReducer.cartproduct)
    // console.log(dataproductaddedtotal, "here")
    const [cardimage, setCardImage] = useState("")
    const [oneproduct, setoneproduct] = useState<ItemTpe | null>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://shy-puce-binturong-ring.cyclic.app/electronics/${user_id}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setCardImage(data.image[0])
                const { id, image, category, brand, rating, rated_by, description, price, color } = data
                setoneproduct({ id, image, category, brand, rating, rated_by, description, price, color })

            })
    }, [user_id])


    const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        let flag = false
        for (let i = 0; i <= dataproductaddedtotal.length - 1; i++) {
            if (dataproductaddedtotal[i].id === Number(user_id)) {
                flag = true
            Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Product already in cart',

})
                break;
            }
        }

        if (flag === false) {
            Swal.fire(
          'Good job!',
        'Product Added to cart',
        'success'
            )
            dispatch(addproductaction({ ...oneproduct, quantity: 1 }))
        }
    }



    return (


        oneproduct === null ? <div style={{ margin: "auto", width: "fit-content" }}>
            <img src="https://i0.wp.com/static.onemansblog.com/wp-content/uploads/2016/05/clock-loading.gif" alt="loading_img" />

        </div>

            :
            <WRAPPER>
                <div className='card_img_pics'>
                    <div className='side_img_cards'>
                        <img onClick={() => setCardImage(oneproduct.image[0])} className='side_card' src={oneproduct.image[0]} alt="" />
                        <img onClick={() => setCardImage(oneproduct.image[1])} className='side_card' src={oneproduct.image[1]} alt="" />
                        <img onClick={() => setCardImage(oneproduct.image[2])} className='side_card' src={oneproduct.image[2]} alt="" />
                        <img onClick={() => setCardImage(oneproduct.image[3])} className='side_card' src={oneproduct.image[3]} alt="" />
                    </div>
                    <div className='main_img_card'>
                        <img src={cardimage} alt="" />
                    </div>

                </div>
                <div className='card_detail'>
                    <h2 style={{ marginBottom: "4px" }}> {oneproduct.brand.toUpperCase()}  {oneproduct.category.toUpperCase()}</h2>
                    <div style={{ marginBottom: "4px" }}>
                        <Starrating rating={oneproduct.rating} review={oneproduct.rated_by} />
                        <span className='review'>{`   (${oneproduct.rated_by} reviews)`} </span>
                    </div>
                    <h5 className='price'>{`MRP:₹${oneproduct.price}.00`}</h5>
                    <p style={{ marginBottom: "20px" }}>{oneproduct.description}</p>
                    <p style={{ marginBottom: "3px" }}>Available: <b style={{ color: "green" }}>In Stock</b></p>
                    <p style={{ marginBottom: "3px" }}>Color: <b>{oneproduct.color}</b></p>
                    <p className='brand_single_product'>Brand: <b style={{ color: "blue" }}>{oneproduct.brand.toUpperCase()}</b></p>
                    <button style={{ cursor: "pointer" }} onClick={handleAddProduct} className='cart_btn'><i style={{ marginRight: "10px", fontSize: "25px", color: "black" }} className="fa-solid fa-cart-shopping"></i>Add To Cart</button>

                </div>
            </WRAPPER>


    )
}

export default Singleproductpage

const WRAPPER = styled.div`

/* border:3px solid green; */
position:relative;
top:80px;
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
        width:280px;
        height:320px;
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
        padding:25px;
        border-radius:13px;
     
      }

    
    

      .card_detail{
        width:50%;
        /* border:3px solid purple; */
        padding-top: 80px;
      }


     .review{
    position:relative;
    bottom:1px;
    
}

.brand_single_product{
    border-bottom:3px solid grey;
   padding-bottom:30px;
   margin-bottom: 20px;;
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