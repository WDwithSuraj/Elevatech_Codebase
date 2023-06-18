// import React,{useState} from 'react'
import logo from "../Images/elevateTechLogo.png"
import { styled } from 'styled-components'
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { RootState } from '../redux/store'
import { useSelector } from "react-redux"

interface ItemTpe {
  image: string;
  id: number;
  title: string;
  price: number;
  rating: number;
  rated_by: number;
}

export const Navbar = () => {




  const [data, setData] = useState<ItemTpe[]>([])
  const [query, setQuery] = useState("")
  const cartItem = useSelector((store: RootState) => store.cartReducer.cartproduct)

  useEffect(() => {
    fetch(`https://shy-puce-binturong-ring.cyclic.app/electronics?q=${query}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setData(res)
      })


  }, [query])

  console.log(data, "here datas")

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const navigate = useNavigate();

  return (
    <DIV>
      <div className="logo" onClick={() => navigate("/")} >
        <img src={logo} alt="" />
      </div>
      <div className="navLIst">
        <div style={{ position: "relative" }} className='navSearchBox'>
          <label>
            <input onChange={handlechange} type="search" placeholder='Type to Search' />
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>




          {
            query !== "" ? <div className="scroll_container" style={{ position: "absolute", top: "65px", width: "320px", background: "white", height: "400px", zIndex: "100", overflowY: "scroll", borderRadius: "20px", padding: "3px 9px 3px 14px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              {
                data.map((item: ItemTpe) => {
                  return <Link style={{ textDecoration: "none" }} to={`/products/${item.id}`}><div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
                    <img width="55px" height="50px" src={item.image[0]} alt="" />
                    <p style={{ fontWeight: "600", padding: "8px 4px 8px 4px", margin: "6px", borderRadius: "8px" }} key={Math.random()}>{`${item.title.substring(0, 40)}....`}</p>
                  </div></Link>

                })
              }
            </div>
              : null
          }

        </div>
        <Link style={{ textDecoration: "none" }} to="/products"><h3>Products</h3></Link>
        <h3>About us</h3>

        <Link style={{ textDecoration: "none" }} to="/login"><h3>Login<i className="fa-solid fa-user"></i></h3></Link>

        <Link style={{ textDecoration: "none" }} to="/products/cart"> <span style={{fontWeight:"600", position:"absolute",top:"14px",right:"70px"}}>{cartItem.length > 0 ? cartItem.length : null}</span><h3>Cart <i className="fa-solid fa-cart-shopping"></i></h3></Link>
      </div>
    </DIV>
  )
}



const DIV = styled.div`

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;
  .logo{
    width: 18%;
    padding: 7px;
    cursor: pointer;
  };
  .logo img {
    width: 100%;
    margin-left: 5px;
  };
 
  .navLIst {

    display: flex;
    align-items: center;
    width: 80%;
    justify-content: space-around;
    padding: 7px;
  };
   .navLIst h3 {
      padding: 5px;
      cursor: pointer;
   };

  .navLIst h3:hover {
       color: grey;
       cursor: pointer;
    };
    .navSearchBox {
      border : 3px solid black;
      border-radius: 28px;
      display: flex;
      align-items: center;
      padding-bottom: 4px;
      padding: 5px;
    };

    .navSearchBox input {
      width: 300px;
      height: 40px;
      font-size: 23px;
      font-weight: 600;
     outline: none;
     border: none;
     border-radius: 10px;
     
    };
    .navSearchBox .fa-magnifying-glass {
      font-size: 22px;
      margin: 5px;
      padding: 10px 14px 10px 14px ;
      background-color: orange;
      border-radius: 18px;
    };
    .fa-user {
      margin: 5px;

    }

  

`