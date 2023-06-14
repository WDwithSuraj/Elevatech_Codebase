import React from 'react'
import Starrating from './Starrating'


interface ProductCardType {
    image: string,
    id: number,
    title: string,
    price: number,
    rating: number,
    rated_by: number
}

export const Productcard = ({ image, title, price, rating, rated_by }: ProductCardType) => {
    return (
        <div style={{border:"3px solid blue"}}>
            <div style={{textAlign:"center"}}>
            <img style={{border:"2px solid red"}} width={"170px"} height={"220px"} src={image[0]} alt={"j"} />
            </div>
            <p>{title}</p>
            <p style={{fontWeight:"600"}}>₹ {price}</p>
            {/* <p>{rating} ({rated_by})</p> */}
            <Starrating rating={rating} review={rated_by} />
            
        </div>
    )
}
