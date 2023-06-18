/* eslint-disable react-hooks/exhaustive-deps */
// import React,{useState} from 'react'
import logo from "../Images/elevateTechLogo.png"
import { styled } from 'styled-components'
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import {auth} from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn, userLoggedOut } from "../redux/action";
import { RootState } from "../redux/store";

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
const [userNameFirstLetter, setUserNameFirstLetter]  = useState('')
  const dispatch = useDispatch()
  const isAuth = useSelector((store : RootState )=> store.authReducer.isAuth)

  useEffect(()=> {
        const listen = onAuthStateChanged(auth, (user )=> {
            if(user && user.email){
                setUserNameFirstLetter(user.email[0])
                dispatch(userLoggedIn())
            }
        })
        return () => {
            listen()
        }
    },[])

     const logOut = () => {
         Swal.fire({
             title: 'Are you sure?',
             text: "You want to log out!",
             icon: 'warning',
            showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, log out!'
            }).then((result) => {
        if (result.isConfirmed) {
            signOut(auth).then(()=> {
            dispatch(userLoggedOut())
            Swal.fire(
                'Logged Out!',
                 'You have been logged out!',
                     'success'
                    )
        })
  }
  
    })
     
    } 


  useEffect(() => {
    fetch(`https://shy-puce-binturong-ring.cyclic.app/electronics?q=${query}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setData(res)
      })

      console.log(isAuth)
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
        <Link style={{ textDecoration: "none", color : "black" }} to="/products"><h3>Products</h3></Link>
        <h3>About us</h3>
          {isAuth? <div className="logOutDiv"><h2 className="logOutText">{userNameFirstLetter.toUpperCase()}</h2><button className="button-37" onClick={logOut} >Log Out</button></div> :
        <Link style={{ textDecoration: "none", color : "black" }} to="/login"><h3>Login<i className="fa-solid fa-user"></i></h3></Link>
          } 
        <Link style={{ textDecoration: "none", color : "black" }} to="/products/cart"><h3>Cart <i className="fa-solid fa-cart-shopping"></i></h3></Link>
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
    .logOutDiv {
      display: flex;

      

    };
    .logOutText{
      font-size: 2rem;
      margin-right:5px ;
      background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); 
      padding: 2px 10px 2px 10px;
      margin-left: 5px;
      border-radius: 50%;
    }
    .logOutBtn {
      padding : 0 15px 0 15px;
      margin : 0;
      font-weight: 800;
    };

  .button-37 {
  background-color: #13aa52;
  border: 1px solid #13aa52;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-37:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .button-37 {
    padding: 10px 30px;
  }
}

`

