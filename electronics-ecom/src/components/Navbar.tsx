// import React,{useState} from 'react'
import logo from "../Images/elevateTechLogo.png"
import { styled } from 'styled-components'
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"


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
            <input onChange={handlechange} type="search" placeholder='Try headphones!' />
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>




          {
            query !== "" ? <div style={{ position: "absolute", top: "55px", width: "320px", background: "white", height: "400px",zIndex:"100", overflowY: "scroll",borderRadius:"15px" ,padding:"3px 9px 3px 14px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
              {
                data.map((item :ItemTpe) => {
                  return <Link style={{textDecoration:"none"}} to={`/products/${item.id}`}><div style={{ display: "flex", justifyContent: "center", alignItems: "center",color:"black" }}>
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

        <Link style={{ textDecoration: "none" }} to="/products/cart"><h3>Cart <i className="fa-solid fa-cart-shopping"></i></h3></Link>
      </div>
    </DIV>
  )
}

//  {
//           data.length >0  ? <div style={{position:"relative",top:"60px",right:"340px"}}>
//             {
//               data.map((item) => {
//                 return <p style={{border:"3px solid black", padding:"4px",margin:"6px",width:"270px"}} key={Math.random()}>{item.title.substring(1,40)}</p>
//               })
//             }
//           </div>
//             : null
//         } 


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
      border : 2px solid black;
      display: flex;
      align-items: center;
      padding-bottom: 4px;
      padding: 5px;
    };
    .navSearchBox input {
      width: 300px;
      height: 40px;
      font-size: 20px;
     outline: none;
     border: none;
    };
    .navSearchBox .fa-magnifying-glass {
      font-size: 22px;
      margin: 5px;
      padding: 5px;
    };
    .fa-user {
      margin: 5px;



      
    }

    
`