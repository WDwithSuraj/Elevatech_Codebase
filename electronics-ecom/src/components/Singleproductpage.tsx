import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../redux/store'




const Singleproductpage = () => {

    const { id } = useParams()
    const ProductData = useSelector((store: RootState) => store.productReducer.product)
     



    let particularProduct = ProductData.filter((ele, index) => {
        if (ele.id === Number(id)) {
            return true
        } else {
            return false
        }
    })

    console.log(particularProduct);


    // const {id} = particularProduct
 
    return (
        <div>

            <div className='side_img_cards'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className='main_img_card'>
                <img src="" alt="" />
            </div>
            <div className='card_detail'></div>


        </div>
    )
}

export default Singleproductpage