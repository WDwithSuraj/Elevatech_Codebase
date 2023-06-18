import React,{useState} from 'react'
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import loginimg from "../Images/loginimg.png";

export const SignUp = () => {
       const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
        <div style={{ position: "relative" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  position: "absolute", top: "20px", left: "16%", width: "65%", height: "500px", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                <div style={{ width: "49%", margin: "0px 10px",  height: "460px" }}>
                    <img width="90%" src={loginimg} alt="" />
                </div>
                <div style={{ backgroundImage: "linear-gradient(to bottom,rgba(36,174,177,0) 50%,rgba(36,174,177,.7) 130%),linear-gradient(to bottom,#fff,#fff)", width: "49%", margin: "0px 10px",  height: "460px" }}>
                    <div style={{ display: "flex", height: "440px", justifyContent: "center", gap: "30px", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ marginLeft: "13%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <FaUser style={{ fontSize: "22px", color: "teal" }} />
                            <input name="username" className="input_login_password" style={{ width: "240px", fontSize: "20px", padding: "5px 0px 5px 8px", outline: "none", border: "0px", background: "none" }} type="text" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value) } />
                        </div>

                        <div style={{ marginLeft: "13%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <RiLockPasswordFill style={{ fontSize: "25px", color: "teal" }} />
                            <input name="password"  className="input_login_password" style={{ width: "240px", fontSize: "20px", padding: "5px 0px 5px 8px", outline: "none", border: "0px", background: "none" }} type="password" placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                        <div style={{ marginRight: "18px", marginTop: "10px" }}>
                            <button  style={{ padding: "7px 35px", cursor:"pointer", backgroundColor: "#32aeb1", color: "white", fontWeight: "600" }}> Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
