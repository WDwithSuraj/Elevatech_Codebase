import React from 'react'
import { ImageSlider } from '../components/ImageSlider'
import { Crausel } from '../components/Crausel'
import styled from 'styled-components'
import Footer from '../components/Footer'
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
        <HOMEImage className='homeImage'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/10thanniversary/D81867058_PC_Header_1500x450_1.gif" alt="" />
        </HOMEImage>
        <ACTOR>
          <div><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fitness_Freak_2.png?v=1685083745" alt="" />
          <h1>For Fitness</h1>
          </div>
          <div><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Party_Animal_4.png?v=1685942349" alt="" />
          <h1>For Parties</h1>
          </div>
          <div><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Workaholic_2.png?v=1685083745" alt="" />
          <h1>For Work</h1>
          </div>
          <div><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Entertainment_2.png?v=1685083746" alt="" />
          <h1>For Audiophiles</h1>
          </div>
        </ACTOR>
      </div>
      <Footer />
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
  div h {
    margin: 0;
    padding: 0;
  }
  
`
const ACTOR = styled.div`
  display: flex;
  justify-content: space-evenly;
  width:90%;
  margin: auto;
  margin-top: 50px;
  margin-bottom : 50px;
  div img{
   width: 310px;
   height: 500px;
    margin: 0;
    padding: 0;
  };
 
  
`
const HOMEImage = styled.div`
 margin-left: 50px;
`