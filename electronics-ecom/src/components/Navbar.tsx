import React,{useState} from 'react'
import logo from "../Images/elevateTechLogo.png"
import { styled } from 'styled-components'
export const Navbar = () => {

  return (
    <DIV>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
         <div className="navLIst">
         <div className='navSearchBox'>
          <label>
              <input type="search" placeholder='Try headphones!' />
              <i className="fa-solid fa-magnifying-glass"></i>
          </label>
         </div>
           <h3>Products</h3>
           <h3>About us</h3>
           <h3>Login<i className="fa-solid fa-user"></i></h3>
           <h3>Cart <i className="fa-solid fa-cart-shopping"></i></h3>
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