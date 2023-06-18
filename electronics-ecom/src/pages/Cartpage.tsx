import React from 'react'
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import Cartcard from "../components/Cartcard"
import { useNavigate,Link} from "react-router-dom"
import { deleteaction, getCartTotal } from '../redux/action'
import styled from "styled-components"

const Cartpage = () => {

    const getCartData = useSelector((store: RootState) => store.cartReducer.cartproduct)
    const dispatch = useDispatch()
  const navigate = useNavigate()



    const handledelete = (id: number) => {
        dispatch(deleteaction(id))
    }



    let totalamount = 0
    for (let i = 0; i <= getCartData.length - 1; i++) {
        totalamount += getCartData[i].price * getCartData[i].quantity
    }


    const handleCartAmt = () => {
        dispatch(getCartTotal(totalamount))
        navigate("/payment")
        
    }

    return (
        <WRAPPER style={{ position: "relative" }}>
            <div style={{ width: "45%", textAlign: "start", top: "40px", position: "absolute", left: "25%" }}>
                <h2 style={{marginBottom:"10px"}}>Shopping Cart</h2>
                <h3 >You have <span style={{ color: "red",fontSize:"28px" }}>{getCartData.length}</span> items in your cart</h3>
            </div>
            {
                getCartData.length === 0 ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "25px", width: "40%", position: "absolute", top: "150px", left: "18%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "320px", }} >
                    <img width={"320px"} height={"300px"} src="https://vividparts.com/site_assets/images/empty_cart.gif" alt="" />
                   <Link to={"/products"}><button style={{padding:"15px 40px 15px 15px",borderRadius:"14px",fontWeight:"600",fontSize:"16px", backgroundColor: "#51f351",color:"black",border:"0px",cursor:"pointer",textAlign:"center"}}>Shop Now</button></Link>
                </div>
                    :

                    <div style={{ width: "45%", position: "absolute", top: "120px", left: "25%" }}>
                        <div style={{ padding: "10px 0px 10px 40px", display: "grid", gridTemplateColumns: "repeat(5,1fr" }}>
                            <p>ITEM</p>
                            <p style={{ position: "relative", left: "20px" }}>NAME</p>
                            <p>QUANTITY</p>
                            <p>SUBTOTAL</p>
                            <p>REMOVE</p>
                        </div>
                        {/* <hr /> */}
                        <div>

                        </div>



                        <div className='scroll_container' style={{ width: "100%", borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "370px", overflowY: "scroll" }} >
                            {
                                getCartData.map((item) => {
                                    return (
                                        <Cartcard {...item} handledelete={handledelete} />
                                    )
                                })
                            }
                        </div>
                        <div style={{ width: "35%", marginTop: "14px" }}>
                            <h3 style={{ borderRadius: "12px", textAlign: "start", backgroundColor: "rgb(224, 241, 224)", color: "black", padding: "25px 25px 25px 10px", marginBottom: "10px" }}>Total Amount: Rs {totalamount}</h3>
                            <p className='checkout-btn' style={{ borderRadius: "12px", fontSize: "18px",  width: "200px", textAlign: "center",  padding: "12px 8px", cursor :"pointer" ,fontWeight:"600"}} onClick={handleCartAmt} >Checkout</p>
                        </div>
                    </div>
            }

        </WRAPPER>
    )
}

export default Cartpage

const WRAPPER = styled.div`
    


    .checkout-btn{
        background-color: rgb(245, 127, 127);
        color: black;
        transition: all 0.2s ease-in-out;
        


    }

    .checkout-btn:hover{
        background-color: #51f351;
        color: white;
      
    }

`


