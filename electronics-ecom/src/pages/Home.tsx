import React from 'react'
import { ImageSlider } from '../components/ImageSlider'
import { Crausel } from '../components/Crausel'
import styled from 'styled-components'
export const Home = () => {


  return (
    <>
      <div>
        <ImageSlider/>
        <Crausel/>
        <DIV>
          <div><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334305_small.svg?v=1682336123" alt="" />
          <h2>1 Year Warranty</h2>
          </div>
          <div><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334304_small.svg?v=1682336123" alt="" />
          <h2>7 day Replacement</h2>
          </div>
          <div><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334303_small.svg?v=1682336123" alt="" />
          <h2>Free Shipping</h2>
          </div>
          <div><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334302_small.svg?v=1682336123" alt="" />
          <h2>GST Billing</h2>
          </div>
        </DIV>
      </div>
    </>
  )
}


const DIV = styled.div`
  display: flex;
  justify-content: space-evenly;
  width:90%;
  margin: auto;
  margin-top: 50px;
  margin-bottom : 50px;
  div img{
   width: 150px;
   height: 200px;
    margin: 0;
    padding: 0;
  };
  div h2 {
    margin: 0;
    padding: 0;
  }
`