import React, {useState, useEffect} from 'react'
import {sliderImage } from '../ImageSlider'
import styled from "styled-components"
export const ImageSlider = () => {
    const [count, setCount] = useState(0);


const handleInc = () => {
    setCount((prev) => prev + 1)
    if(count === sliderImage.length-1){
        setCount(0)
    }
}
const handleDec = () => {
    setCount((prev) => prev - 1)

    if(count === 0){
        setCount(sliderImage.length-1)
    }
}


  return (
    <DIV>
            <button onClick={handleDec}><i className="fa-solid fa-chevron-left"></i></button>
            <div className='sliderImage'>
                <img src={sliderImage[count]} alt="" />
            </div>
            <button onClick={handleInc}>  <i className="fa-solid fa-chevron-right"></i></button>

    </DIV>
  )
}



const DIV = styled.div`
    display: flex;
    width: 100%;
    align-items : center;
    margin-top: 50px;
    .sliderImage{
        width : 100%
    };
    .sliderImage img {
        width : 100%;
    }
    button {
        width: 50px;
        height: 100px;
        font-size :2rem;
    }
`