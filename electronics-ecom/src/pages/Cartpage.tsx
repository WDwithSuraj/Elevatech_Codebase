import React from 'react'
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import Cartcard from "../components/Cartcard"
import { deleteaction } from '../redux/action'

const Cartpage = () => {

    const getCartData = useSelector((store: RootState) => store.cartReducer.cartproduct)
    const dispatch = useDispatch()




    const handledelete = (id: number) => {
        dispatch(deleteaction(id))
    }



    let totalamount = 0
    for (let i = 0; i <= getCartData.length - 1; i++) {
        totalamount += getCartData[i].price * getCartData[i].quantity
    }


    return (
        <div style={{ position: "relative" }}>
            <div style={{  width: "45%", textAlign: "start", top: "20px", position: "absolute", left: "25%" }}>
                <h2>Shopping Cart</h2>
                <h3>You have <span style={{ color: "red",fontSize:"28px" }}>{getCartData.length}</span> items in your cart</h3>
            </div>
            {
                getCartData.length === 0 ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "25px", width: "50%", position: "absolute", top: "150px", left: "18%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "320px", }} >
                    <img width={"370px"} height={"300px"} src="https://vividparts.com/site_assets/images/empty_cart.gif" alt="" />
                </div>
                    :

                    <div style={{ width: "45%", position: "absolute", top: "100px", left: "25%" }}>
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



                        <div className='scroll_container' style={{ width: "100%", borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "320px", overflowY: "scroll" }} >
                            {
                                getCartData.map((item) => {
                                    return (
                                        <Cartcard {...item} handledelete={handledelete} />
                                    )
                                })
                            }
                        </div>
                        <div style={{ width: "39%", marginTop: "45px" }}>
                            <h3 style={{ borderRadius: "12px", textAlign: "start", backgroundColor: "rgb(239, 239, 200)", color: "black", padding: "30px 25px", marginBottom: "10px" }}>Total Amount: Rs {totalamount}</h3>
                            <p style={{ borderRadius: "12px", fontSize: "18px", backgroundColor: "rgb(92, 243, 92)", width: "200px", textAlign: "center", color: "black", padding: "16px 12px",fontWeight:"700",cursor:"pointer" }}>Checkout</p>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Cartpage

