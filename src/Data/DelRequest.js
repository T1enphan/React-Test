import { useState } from "react";
import axios from "axios";

function DelDemo() {
  const [input, setIput] = useState("");
  function handleChange(e) {
    setIput(e.target.value);
  }
  function handleSumbit(e) {
    e.preventDefault();
    const data = {
      id: input,
    };
    axios
      .delete("https://jsonplaceholder.typicode.com/users/${input}")
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="id"
          value={input}
          onChange={handleChange}
        ></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default DelDemo;
