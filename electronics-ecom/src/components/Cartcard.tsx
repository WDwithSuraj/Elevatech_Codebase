import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decreasequantityaction, incresequantityaction } from '../redux/action';

interface CardCartType {
    image: string,
    id: number,
    category: string,
    brand: string,
    price: number,
    handledelete: any,
    quantity: number
}


const Cartcard = ({ image, id, category, brand, price, handledelete, quantity }: CardCartType) => {
    
    const dispatch = useDispatch()

    const handleincrease = () => {
        dispatch(incresequantityaction(id, quantity + 1))
    }


    const handledecrease = () => {
        dispatch(decreasequantityaction(id, quantity - 1))
    }

    const handleremove = () => {
        handledelete(id)
    }

    return (
        <>
            <div style={{ margin: "5px 0px", padding: "8px 0px 4px 23px", display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
                <div>
                    <img width="74px" height="65px" src={image[0]} alt="" />
                </div>
                <p style={{ fontWeight: "500", marginTop: "15px" }}>{`${brand} ${category}`}</p>
                <div>
                    <button onClick={handleincrease} id={"id"} value={"price"} style={{ marginRight: "8px", padding: "4px 10px ", marginLeft: "8%", marginTop: "13px" }}>+</button>
                    {quantity}
                    <button onClick={handledecrease} disabled={quantity === 1} id={"id"} style={{ marginLeft: "8px", padding: "4px 10px" }}>-</button>
                </div>
                <div style={{ marginTop: "0px" }}>
                    <p style={{ marginLeft: "20%" }}>₹ {price * quantity}</p>

                </div>
                <div> <RiDeleteBin5Fill onClick={handleremove} id={"id"} style={{ marginTop: "14px", color: "red", marginLeft: "20%", fontSize: "26px" }} /></div>

            </div>
            <hr />
        </>



    )
}


export default Cartcard