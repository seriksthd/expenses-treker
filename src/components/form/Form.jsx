import React from "react";
import { createGlobalStyle } from "styled-components";

export default function Form({handleForm}) {
  return (
    <>
      <StyleForm />
     
        <div class="wrapper">
          <form>
            <h2>Login</h2>
            <div class="input-field">
              <input type="email" required />
              <label>Enter your email</label>
            </div>
            <div class="input-field">
              <input type="password" required />
              <label>Enter your password</label>
            </div>
            <div class="forget">
              <label for="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <a href="#">forgot password</a>
            </div>
            <button type="submit" onClick={handleForm}>Login</button>
            <div class="register">
              <p>Don't have an account?</p>
            </div>
          </form>
        </div>
     
    </>
  );
}
const StyleForm = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "open sans", sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: url("https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg")
  no-repeat center center fixed;
background-size: cover;
}
body::before {
  position: absolute;
  width: 100%;
  height: 100%;
}
.wrapper {
  width: 400px;
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  transition: all 0.3s ease;
}
.wrapper:hover {
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
}
form {
  display: flex;
  flex-direction: column;
}
h2 {
  font-size: 2.2rem;
  margin-bottom: 25px;
  color: white;
  letter-spacing: 1px;
}
.wrapper a:hover {
  text-decoration: underline;
}
button {
  background-color: #271930;
  color: white;
  font-weight: 600;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 25px;
  font-size: 16px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}
button:hover {
  color: #000000;
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
}
.register {
  text-align: center;
  margin-top: 30px;
  color: #ffffff;
}
.input-field {
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  margin: 20px 0;
}
.input-field label {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #ffffff;
  pointer-events: none;
  transition: 0.3s ease;
}
.input-field input {
  width: 100%;
  height: 40%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #ffffff;
  padding: 0 10px;
}
.input-field input:focus ~ label,
.input-field input:valid ~ label {
  font-size: 0.9rem;
  top: 10px;
  transform: translateY(-150%);
  color: #ffdde1;
}
.forget {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0 35px 0;
  color: #ffffff;
}
#remember {
  accent-color: #ffdde1;
}
.forget label {
  display: flex;
  align-items: center;
}
.forget label p {
  margin-left: 8px;
}
.wrapper a {
  color: #ffdde1;
  text-decoration: none;
}
`;
