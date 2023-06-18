
// import { Authcontext } from "../context/Authcontext"
// import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import loginimg from "../Images/loginimg.png"
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useState } from "react";
// import "../styles/Login.css"

const Login = () => {
    const initstate = {
        username: "",
        password: ""
    }

    const navigate = useNavigate()
    // const { isAuth, setIsAuth, login, logout, setname } = useContext(Authcontext)
    const [values, setvalues] = useState(initstate)
    //  console.log(login)
    // console.log(isAuth,"in login")


    // const handlechange = (e) => {

    //     let { name, value, type } = e.target
    //     setvalues({
    //         ...values,
    //         [name]: type === "text" ? e.target.value : Number(e.target.value)
    //     }

    //     )
    // }

    // const handlesubmit = () => {
    //     console.log(values)
    //     checklogin()
    // }

    // const checklogin = () => {
    //     fetch(`http://localhost:8080/users`)
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             console.log(data)
    //             let flag = false
    //             for (let i = 0; i <= data.length - 1; i++) {
    //                 if (values.name === data[i].name &&
    //                     values.password === data[i].password) {
    //                     flag = true
    //                     break;
    //                 }
    //             }

    //             if (flag === true) {
    //                 login()
    //                 setname(values.username)
    //                 alert("Login Successfull")
    //                 navigate("/healthcare")
    //             } else {
    //                 alert("Wrong Credentials")
    //             }
    //         })
    // }

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
                            <input name="username" className="input_login_password" style={{ width: "240px", fontSize: "20px", padding: "5px 0px 5px 8px", outline: "none", border: "0px", background: "none" }} type="text" placeholder="Enter Username" />
                        </div>

                        <div style={{ marginLeft: "13%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <RiLockPasswordFill style={{ fontSize: "25px", color: "teal" }} />
                            <input name="password"  className="input_login_password" style={{ width: "240px", fontSize: "20px", padding: "5px 0px 5px 8px", outline: "none", border: "0px", background: "none" }} type="password" placeholder="Enter Password" />
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
export default Login


// backgroundImage: "linear-gradient(to bottom,rgba(36,174,177,0) 50%,rgba(36,174,177,.7) 130%),linear-gradient(to bottom,#fff,#fff)"