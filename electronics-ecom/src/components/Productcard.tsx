import React from 'react'
import Starrating from './Starrating'
import styled from 'styled-components'
import { Link } from "react-router-dom"
interface ProductCardType {
    image: string,
    id: number,
    title: string,
    price: number,
    rating: number,
    rated_by: number
}

export const Productcard = ({ image, id, title, price, rating, rated_by }: ProductCardType) => {

    // const [show,setShow] = useState(image[0])
      
    return (
        <DIV  >
            <div>

                <div style={{ textAlign: "center" }}>
                    <Link to={`/products/${id}`}>
                        <img src={image[0]} alt={"j"} />
                    </Link>
                </div>

                <p className='title'>{title.substring(0, 55)}......</p>
            </div>
            <div>
                <p className='price'>₹ {price}
                    <span style={{ marginLeft: "15px", fontSize: "15px", color: "#388e3c", fontWeight: "700" }}>{`${Math.round(Math.random() * 27) + 11}% off`}</span>

                </p>
                {/* <p>{rating} ({rated_by})</p> */}

                <div>
                    <Starrating rating={rating} review={rated_by} />
                    <span className='review'>{`   (${rated_by} reviews)`} </span>
                </div>
            </div>

        </DIV>
    )
}


const DIV = styled.div`

*{
    margin:0px;
    padding:0px;
}



box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius:14px;

img:hover{
    scale:1.1;
}



  display:flex;
  flex-direction:column;
  margin-bottom:14px;
  justify-content:space-between;
  padding:10px;
 



img{

    width:170px;
    height:200px;
    padding-bottom:30px;
    padding-top:10px;
   

  
}





.title{
    padding-bottom:10px;
}

.review{
    position:relative;
    bottom:1px;
    
}

.price{
    margin-bottom:8px;
    font-size:18px;
    font-weight:600;
}





`


