

function Tien(props) {
  console.log(props.arr);
  console.log(props.obj);
  // function renderDataArr(){
  //   let {arr} = props
  //   if(arr.length>0){
  //     return arr.map((value, key)=>{
  //       return(<>
  //       <li key={key}>
  //         {value}
  //       </li>
  //       </>)
  //     })
  //   }
  // }
  function renderDataObj(){
    let {obj} = props;
    if(Object.keys(obj).length>0){
      return Object.keys(obj).map((key) => {
        return(
        <li key={key}>
          {obj[key]}
        </li>)
      })
    }else{
      return null;
    }
  }
  
  return (
    <>
     <p>
      MAP theo arr va obj
     </p>
     <ul>
      {/* {renderDataArr()} */}
        {renderDataObj()}
     </ul>
    </>
  );
}
export default Tien;
