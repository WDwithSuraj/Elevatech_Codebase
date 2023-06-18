import React from 'react';
import styled from 'styled-components'
export const Admin = () => {
 


  return (
    <DIV>
       <div className="adminSidebar">
        <input type="checkbox" />
        <h3>Suraj</h3><br />
        <input type="radio" name="same" />
        <h3>Anuraj</h3><br />
        <input type="radio"  name="same"/>
        <h3>kshdjfis</h3><br />
        <input type="checkbox" />
        <h3>dsfjls</h3>
       </div>
       <div className="adminMainContent">
        <div className="admiForm">
          <label>Product Image  : 
                <input type="text" placeholder='Enter your school name' />
            </label><br />
            <label>Name  : 
                <input type="text" placeholder='Enter your name' />
            </label><br />
            <label>Price
                <input type="text" placeholder='Enter your fathers name' />
            </label><br />
            <label>RAM : 
                <input type="text" placeholder='Enter your mothers name' />
            </label><br />
            <label>ROM : 
                <input type="date" />
            </label><br />
            <label>
                    <input type="tel" maxLength={10} placeholder='Enter your mobile number'/>
            </label><br />
            <label> 
                <input type="submit"  className='submitBtn'/>
            </label>
            </div>
       </div>
    </DIV>
  )
}



const DIV = styled.div`
    display: flex;
    width: 95%;
    margin:  auto;
    height:  100vh;
    border: 5px solid red;
    gap: 7px;
    padding : 10px;
    .adminSidebar {
        border: 2px solid green;
        width: 25%;
        height: 90vh;
        text-align: center;
    }
    .adminMainContent {
        border: 2px solid grey;
        width: 75%;
        height: 90vh;
     
    };
    .admiForm {
        border: 2px solid black;
        width: 400px;
        margin: auto;
        margin-top: 50px;
        padding: 10px;
        font-size: 20px;
    };
    
    .admiForm input {
        height: 40px;
        width: 90%;
        margin: auto;
        margin: 7px;
        font-size: 18px;
    };
    .adminSidebar h3 {
        display: inline;
    };
    .submitBtn {
        outline: grey;
        background-color: #0ee1e1;
        color: black;
    };
    .submitBtn:hover{
        background-color: black;
        color: white;
        outline: gold;
    }
`