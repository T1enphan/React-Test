import { useState } from "react";

// let khai bao biến thay đổi dc
// const biến côs đinh
// const x = 1;

// state: biên toàn cuc

// cau truc 1 component
function FormLogin() {
  // const [getItem, setItem] = useState("");
  // const [getItem2, setItem2] = useState("");
  // const [err1, setErr1] = useState("");
  // const [err2, setErr2] = useState("");
  // const [getSelect, setSelect] = useState("");
  // const [errSelect, seterrSelect] = useState("");

  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });

  const [errors, setErros] = useState({});

  function hanldeInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  // function hanldeInput2(e) {
  //   setItem2(e.target.value);
  // }

  // function hanldeInput3(e) {
  //   setSelect(e.target.value);
  // }

  function hanldeForm(e) {
    e.preventDefault();

    let errorSubmit = {};
    let flag = true;

    if (inputs.email == "") {
      errorSubmit.email = "vui long nhap email";
      flag = false;
    }
    if (inputs.pass == "") {
      errorSubmit.pass = "vui long nhap pass";
      flag = false;
    }
    if (!flag) {
      setErros(errorSubmit);
    } else {
      var getData = localStorage.getItem("user");
      if (getData) {
        getData = JSON.parse(getData);
      }
      var emailRegis = getData.email;
      var passRegis = getData.pass;
      var emailLog = inputs.email;
      var passLog = inputs.pass;

      if (emailRegis == emailLog && passRegis == passLog) {
        console.log("login thành công");
      } else {
        console.log("Sai mật khẩu hoặc tài khoản");
      }
      // console.log(
      //   "Đây là email từ local: ",
      //   emailRegis + "đây là password từ local : ",
      //   passRegis
      // );

      // console.log(
      //   "Đây là email từ login: ",
      //   emailLog + "đây là password từ login : ",
      //   passLog
      // );

      setErros({});
    }
    // let x = 1;
    // if (getItem == "") {
    //   setErr1("vui long nhap email");
    //   x = 2;
    // } else {
    //   setErr1();
    // }

    // if (getItem2 == "") {
    //   setErr2("vui long nhap pass");
    //   x = 2;
    // } else {
    //   setErr2();
    // }

    // if (getSelect == 0) {
    //   seterrSelect("vui long tich select");
    //   x = 2;
    // } else {
    //   seterrSelect();
    // }

    // if (x == 1) {
    //   alert("ok");
    // }
  }

  function renderError() {
    if (Object.keys(errors).length > 0) {
      return Object.keys(errors).map((key, index) => {
        return <li key={index}>{errors[key]}</li>;
      });
    }
  }

  // chay lai khi state thay đổi
  return (
    <>
      {renderError()}
      <form onSubmit={hanldeForm}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={inputs.email}
          onChange={hanldeInput}
        />
        <input
          type="password"
          name="pass"
          placeholder="Mật khẩu"
          value={inputs.pass}
          onChange={hanldeInput}
        />
        <button type="submit">Click</button>
      </form>
    </>
  );
}

export default FormLogin;

// bai 13: co textarea, select
