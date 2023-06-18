import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
// import "../pages/signup.css";
// import logo1 from "../logo1.svg";

const strengthLabels = ["weak", "medium", "strong"];

export const SignUp = () => {
    const [strength, setStrength] = useState("");

    const getStrength = (password: string) => {
        console.log(password);

        let strengthIndicator: number = -1;

        let upper = false,
            lower = false,
            numbers = false;

        for (let index = 0; index < password.length; index++) {
            let char = password.charCodeAt(index);
            if (!upper && char >= 65 && char <= 90) {
                upper = true;
                strengthIndicator++;
            }

            if (!numbers && char >= 48 && char <= 57) {
                numbers = true;
                strengthIndicator++;
            }

            if (!lower && char >= 97 && char <= 122) {
                lower = true;
                strengthIndicator++;
            }
        }

        setStrength(strengthLabels[strengthIndicator] ?? "");
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        getStrength(event.target.value);

    return (
        <WRAPPER className="login-card">
            <img src={"https://cdn.dribbble.com/users/129991/screenshots/4495463/user_sign_up.gif"} alt="imagelogo" />
            <h2>Sign Up</h2>
            <form className="login-form">
                <div className="first_last">
                    <div className="firstname">
                        <input
                            autoComplete="off"
                            spellCheck="false"
                            className="control_firstname"
                            type="email"
                            placeholder="FirstName"
                        />
                        <div id="spinner" className="spinner"></div>
                    </div>
                    <div className="lastname">
                        <input
                            autoComplete="off"
                            spellCheck="false"
                            className="control_lastname"
                            type="email"
                            placeholder="LastName"
                        />
                        <div id="spinner" className="spinner"></div>
                    </div>
                </div>
                <div className="username">
                    <input
                        autoComplete="off"
                        spellCheck="false"
                        className="control"
                        type="email"
                        placeholder="Email"
                    />
                    <div id="spinner" className="spinner"></div>
                </div>
                <input
                    name="password"
                    spellCheck="false"
                    className="control"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <div className={`bars ${strength}`}>
                    <div></div>
                </div>
                <div className="strength">{strength && <>{strength} password</>}</div>
                <button className="control" type="button">
                    JOIN NOW
                </button>
            </form>
        </WRAPPER>
    );
};



const WRAPPER = styled.div`
    
    * {
    box-sizing: border-box;
}

html,
body,
.wrapper {
    height: 100%;
}

body {
    display: grid;
    place-items: center;
    margin: 0;
    background: #f2f3ff;
    font-family: "Euclid Circular A";
    color: #1b1e40;
    animation: rotate 5s infinite alternate linear;
}

/* border:2px solid red; */
margin:auto;
margin-top: 0px;

button {
    background: transparent;
    border: 0;
    cursor: pointer;
}


    width: 400px;
    padding: 60px 30px 32px;
    border-radius: 1.25rem;
    background: #ffffff;
    text-align: center;
    transition: 0.4s;


h2 {
    font-size: 36px;
    font-weight: 600;
    margin: 0 0 30px;
}

 img {
    width: 260px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 5px;
    margin-bottom: 10px;
}

.login-form {
    width: 100%;
    margin: 0;
    display: grid;
}

.login-form input.control::placeholder {
    color: #9d9fbd;
}

.control_firstname {
    border: 1.5px solid #dfe1f0;
    outline: none;
    width: 95%;
    margin-right: 6px;
    height: 56px;
    padding: 0 16px;
    background: #f6f7ff;
    color: inherit;
    border-radius: 6px;
    margin: 8px 0;
    font-family: inherit;
    text-align: left;
    font-size: 18px;
    transition: 0.4s;
}
.control_lastname {
    border: 1.5px solid #dfe1f0;
    outline: none;
    width: 95%;
    height: 56px;
    padding: 0 16px;
    background: #f6f7ff;
    color: inherit;
    border-radius: 6px;
    margin: 8px 0;
    font-family: inherit;
    text-align: left;
    font-size: 18px;
    transition: 0.4s;
}

.first_last {

    display: flex;
    justify-content: space-between;
}
.control {
    border: 1.5px solid #dfe1f0;
    outline: none;
    width: 100%;
    height: 56px;
    padding: 0 16px;
    background: #f6f7ff;
    color: inherit;
    border-radius: 6px;
    margin: 8px 0;
    font-family: inherit;
    text-align: left;
    font-size: 18px;
    transition: 0.4s;
}

button.control {
    cursor: pointer;
    width: 100%;
    height: 56px;
    padding: 0 16px;
    background: #454a8f;
    color: #f7f7f7;
    border: 0;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 2px;
    transition: all 0.375s;
}

.bars {
    margin: 8px 0;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 6px;
    border-radius: 3px;
    background: #dfe1f0;
}

.bars div {
    height: 6px;
    border-radius: 3px;
    transition: 0.4s;
    width: 0%;
}

.bars.weak div {
    background: #e24c71;
    width: 33.33%;
}

.bars.medium div {
    background: #f39845;
    width: 66.66%;
}

.bars.strong div {
    background: #57c558;
    width: 100%;
}

.strength {
    text-align: left;
    height: 30px;
    text-transform: capitalize;
    color: #868b94;
}



`