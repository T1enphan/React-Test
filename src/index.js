import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Tien from "./Tien";
import Login from "./Login/Login";
import Account from "./Account/Account";
import Home from "./HomePage/Home";
import Vd1 from "./B11/Vd1";
import ActionLogin from "./B11/login";
import Vd2 from "./B11/Vd2";
import Test from "./B11/warning";
import NumberList from "./B11/NumberList";
import B from "./B11/B";
import A from "./B11/A";
import FormLogin from "./Login/formLogin";
import FormRegister from "./Register/formRegister";
import GetData from "./Data/GetData";
const arr = [1, 2, 3, 4, 5, 6, 7];
const obj = {
  ten: "tien",
  tuoi: 23,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Tien obj={obj} arr={arr}></Tien> */}
    {/* <A></A> */}
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home></Home>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/vi1" element={<Vd1></Vd1>}></Route>
          <Route path="/form-login" element={<FormLogin></FormLogin>}></Route>
          <Route
            path="/vd-loginbtn"
            element={<ActionLogin></ActionLogin>}
          ></Route>
          <Route path="/vi3" element={<Vd2></Vd2>}></Route>
          <Route path="/vi4" element={<Test></Test>}></Route>
          <Route path="/vi5" element={<NumberList></NumberList>}></Route>
          <Route path="/getData" element={<GetData></GetData>}></Route>
          <Route
            path="/form-register"
            element={<FormRegister></FormRegister>}
          ></Route>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
