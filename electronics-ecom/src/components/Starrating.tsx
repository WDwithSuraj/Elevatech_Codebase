import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"
// import styled from 'styled-components'



interface StarRatingType {
    rating: number,
    review: number
}



const Starrating = ({ rating, review }: StarRatingType) => {
    // console.log(rating, "star",)

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {

        let numbers = index + 0.5

        return <span key={index+1}>
            {
                rating >= index + 1 ? <FaStar /> :
                    rating >= numbers ? <FaStarHalfAlt /> :
                        <AiOutlineStar />
            }
        </span>
    })

    return (
        
        <span style={{color:"red"}}>
            {ratingStar}
         
        </span>
       
        

    )
}

export default Starrating


// const DIV = `
//    color:"yellow"
// `