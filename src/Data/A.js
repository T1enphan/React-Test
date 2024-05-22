import { useEffect, useState } from "react";
import axios from "axios";
import ShowApi from "./B";
function GetApi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // setData(res.data); // bài 1
        if (res.data && res.data.length > 0) {
          console.log("yasir");
          const randomUser =
            res.data[parseInt(Math.random() * res.data.length)];
          console.log(randomUser);
          setData(randomUser);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <ShowApi data={data}></ShowApi>
    </>
  );
}
export default GetApi;
