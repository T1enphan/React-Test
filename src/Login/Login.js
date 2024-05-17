import { useState } from "react";

function Login(props) {

  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");


  function hanldeInputName(e){
    setName(e.target.value)
  }

  function hanldeInputEmail(e){
    setEmail(e.target.value)
  }

  let x = 1 ;

  function hanldeForm(e){
    e.preventDefault();
    if(getEmail ==""){
      setErrorEmail("vui long nhap email")
      x = 2
    }else{
      setErrorEmail()
    }

    if(getName ==""){
      setErrorName("vui long nhap name")
      x = 2 
    }else{
      setErrorName()
    }

    if(x == 1){
      console.log("yasir beo ti fun");
    }

  }



  return (
    <form onSubmit={hanldeForm}>
      <section id="form">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-sm-offset-1">
              <div class="login-form">
                <h2>Login to your account</h2>
                <form>
                  <input type="text" value={getName} placeholder="Name" onChange={hanldeInputName} />
                  <div>{errorName}</div>
                  <input type="email" value={getEmail} placeholder="Email Address" onChange={hanldeInputEmail} />
                  <div>{errorEmail}</div>
                  <span>
                    <input type="checkbox" class="checkbox" />
                    Keep me signed in
                  </span>
                  <button type="submit" class="btn btn-default">
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div class="col-sm-1">
              <h2 class="or">OR</h2>
            </div>
            <div class="col-sm-4">
              <div class="signup-form">
                <h2>New User Signup!</h2>
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email Address" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" class="btn btn-default">
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
  // return (
  //   <form onSubmit={hanldeForm}>
  //     <section id="form">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-sm-4 col-sm-offset-1">
  //             <div className="login-form">
  //               <h2>Login to your account</h2>
  //               <input
  //                 type="text"
  //                 value={getName}
  //                 placeholder="Name"
  //                 onChange={hanldeInputName}
  //               />
  //               <div>{errorName}</div>
  //               <input
  //                 type="email"
  //                 value={getEmail}
  //                 placeholder="Email Address"
  //                 onChange={hanldeInputEmail}
  //               />
  //               <div>{errorEmail}</div>
  //               <span>
  //                 <input type="checkbox" className="checkbox" />
  //                 Keep me signed in
  //               </span>
  //               <button type="submit" className="btn btn-default">
  //                 Login
  //               </button>
  //             </div>
  //           </div>
  //           <div className="col-sm-1">
  //             <h2 className="or">OR</h2>
  //           </div>
  //           <div className="col-sm-4">
  //             <div className="signup-form">
  //               <h2>New User Signup!</h2>
  //               <form action="#">
  //                 <input type="text" placeholder="Name" />
  //                 <input type="email" placeholder="Email Address" />
  //                 <input type="password" placeholder="Password" />
  //                 <button type="submit" className="btn btn-default">
  //                   Signup
  //                 </button>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </form>
  // );
}
export default Login;
