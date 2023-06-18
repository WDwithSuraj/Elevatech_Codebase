
// import { Authcontext } from "../context/Authcontext"
// import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import loginimg from "../Images/loginimg.png"
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useState } from "react";
import {Link} from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase"
import { styled } from "styled-components";
import avtar from "../Images/avatar.png"
import bg from "../Images/bg.svg"

const Login = () => {
     const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const onSingIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredenditals) => {
             setTimeout(()=>{
           navigate('/')
        },1000)
        }).catch((error)=> {
            alert(`Invalid email or password`)
        })

       
    }
    
    

    return (
     <DIV className="login">
      <div className="avatar">
        <img src="https://2.bp.blogspot.com/-WdNReAvdDFM/VrocQdIoHbI/AAAAAAAAR1M/SEBM2vUBMog/s1600/SID_FB_001.gif" alt="" />
      </div>
      <h2>Login</h2>
      

      <form className="login-form">
        <div className="textbox">
          <input type="email" placeholder="Username" />
        
        </div>
        <div className="textbox">
          <input type="password" placeholder="Password" />
         
        </div>
        <button type="submit">LOGIN</button>
        <Link to="/sign-up">New User? Register here!</Link>
      </form>
    </DIV>
    )
}


const DIV = styled.div`
    

  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 30%;
  padding: 70px 30px 44px;
  border-radius: 22px;
 /* background: #0F2027;  /* fallback for old browsers 
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  text-align: center;
  margin : auto;


@media (width >= 450px) {
  .login {
    width: 380px;
  }
}

.avatar {
  margin: 0 auto 16px;
  border-radius: 50%;
  background: linear-gradient(-45deg, #157ae1, #c7a1ff);
  padding: 2px;
  width: 120px;
  height: 120px;
}

.avatar > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;

  border: 4px solid #161616;
}

.login > h2 {
  font-size: 36px;
  font-weight: 500;
  margin: 0 0 4px;
}

.login > h3 {
  color: rgba(255, 255, 255, 0.38);
  margin: 0 0 30px;
  font-weight: 500;
  font-size: 16px;
}

.login-form {
  display: grid;
  gap: 16px;
  place-items: center;
  width: 100%;
  margin: 0;
}

.textbox {
  width: 80%;

  margin : auto;
}

.textbox span {
  position: absolute;
  top: 50%;
  left: 16px;
  translate: 0 -50%;
  color: rgba(255, 255, 255, 0.38);
}

.login-form input,
.login-form button {
  width: 60%;
  height: 60px;
  outline: none;
  padding: 0;
  font-family: inherit;
  font-size: 16px;
  border-radius: 8px;
  margin : auto;
}

.login-form input {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.1);
  font-size: 18px;
  padding: 0 15px 0 10px;
  color: inherit;
}

.login-form input:focus{
  border-color: #157ae1;
}

.login-form input:focus ~ span {
  color: #157ae1;
}

.login-form button {
  cursor: pointer;
  background: #157ae1;
  color: #f9f9f9;
  border: 0;
  font-weight: 600;
  letter-spacing: 2px;
  width : 50%;
  
}

.login-form a {
  color: #157ae1;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
}
`

export default Login






// backgroundImage: "linear-gradient(to bottom,rgba(36,174,177,0) 50%,rgba(36,174,177,.7) 130%),linear-gradient(to bottom,#fff,#fff)"