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
const arr = [1,2,3,4,5,6,7];
const obj = {
  ten : "tien",
  tuoi : 23,
}
const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net", 
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",  
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",  
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692", 
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity", 
    }
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
    }
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Tien obj={obj} arr={arr}></Tien> */}
    <B data={data}></B>
    {/* <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home></Home>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/vi1" element={<Vd1></Vd1>}></Route>
          <Route
            path="/vd-loginbtn"
            element={<ActionLogin></ActionLogin>}
          ></Route>
          <Route path="/vi3" element={<Vd2></Vd2>}></Route>
          <Route path="/vi4" element={<Test></Test>}></Route>
          <Route path="/vi5" element={<NumberList></NumberList>}></Route>
        </Routes>
      </App>
    </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
