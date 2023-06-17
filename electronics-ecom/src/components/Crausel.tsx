import React from 'react'
// import Carousel from "react-multi-carousel"
// import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components'



export const Crausel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        desktop: {
            breakpoint: { max: 1100, min: 800 },
            items: 4,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 800, min: 645 },
            items: 3,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 644, min: 451 },
            items: 2
        },
        mobile1: {
            breakpoint: { max: 450, min: 300 },
            items: 1
        }
    }


    let data = [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ezgif-1-6381642bb4.gif?v=1685013470",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-113.jpg?v=1682576552",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
        "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/k/s/8/f5-5g-mzb0epnin-poco-original-imagpep3afhmezhb.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/a/r/3/-original-imagpxgqpggsx6tm.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/312/312/ksez24w0/computer/h/8/9/rmnb1001-thin-and-light-laptop-realme-original-imag5zhgcstmjbxg.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/t/d/v/xl30-thin-and-light-laptop-infinix-original-imagzmncdyme776h.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/312/312/k4hcjgw0pkrrdj/headphone-refurbished/z/n/7/u-wh-ch510-sony-original-imafk72hs5qwy5ub.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/312/312/l3vxbbk0/headphone/w/q/e/-original-imagewuzhfbtygzw.jpeg?q=70"
    ]


    return (
        <DIV className="carousel_div">
            <div className="inner_carousel_div" style={{ width: "95%", margin: "auto" }} >
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    showDots={false}
                >
                    {
                        data.map((item) => {
                            return (
                                <div key={Math.random()}>
                                    <img width="186px" height="180px" src={item} alt="" />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </DIV>
    )
}


const DIV = styled.div`
    margin-top : 50px;
    margin-bottom: 50px;
`
