import {useState} from "react"


// let khai bao biến thay đổi dc
// const biến côs đinh
// const x = 1;

// state: biên toàn cuc


// cau truc 1 component 
function FormLogin() {

  const [getItem, setItem] = useState("");
  const [getItem2, setItem2] = useState("");
  const [err1, setErr1] = useState("");
  const [err2, setErr2] = useState("");
  const [getSelect, setSelect] = useState("");
  const [errSelect, seterrSelect] = useState("");
  
  function hanldeInput1(e){
    setItem(e.target.value)
  }

  function hanldeInput2(e){
    setItem2(e.target.value)
  }

  function hanldeInput3(e){
   setSelect(e.target.value)
  }

  function hanldeForm(e){
    e.preventDefault();

    let x = 1;
    if(getItem==""){
      setErr1("vui long nhap email")
      x=2
    }else{
      setErr1()
    }

    if(getItem2==""){
      setErr2("vui long nhap pass")
      x=2
    }else{
      setErr2()
    }

    if(getSelect== 0){
        seterrSelect("vui long tich select")
        x=2
    }else{
        seterrSelect()
    }

    if(x==1){
      alert("ok")
    }
  }

  // chay lai khi state thay đổi
  return (
    <>  

      <form onSubmit={hanldeForm}>
        
        <input type="text" value={getItem} id="111" onChange={hanldeInput1} />
        <p>{err1}</p>
        <input type="text" value={getItem2} id="111" onChange={hanldeInput2} />
        <p>{err2}</p>
        <select value={getSelect} onChange={hanldeInput3}>
            <option value={0}>Chon Select</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
        </select>
        <p>{errSelect}</p>
        <button type="submit">click</button>
      </form>

    
     
    </>

  );
}

export default FormLogin;

// bai 13: co textarea, select
