import { useState } from "react";
import axios from "axios";

function Demo() {
  const [input, setIput] = useState("");

  function handleChange(e) {
    setIput(e.target.value);
  }
  function handleSumbit(e) {
    e.preventDefault();
    const data = {
      name: input,
    };
    axios.post("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("====================================");
      console.log(res);
      console.log("====================================");
    });
  }
  return (
    <>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="username"
          value={input}
          onChange={handleChange}
        ></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Demo;
