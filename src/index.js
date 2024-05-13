import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Tien from "./Tien";
import Login from "./Login/Login";
import Account from "./Account/Account";
import Home from "./HomePage/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Tien></Tien> */}
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home></Home>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
