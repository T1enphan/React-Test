import { useState } from "react";

function FormRegister() {
  const data = [
    {
      id: "",
      name: "vui lòng chon",
    },
    {
      id: 1,
      name: "Male",
    },
    {
      id: 2,
      name: "Female",
    },
  ];

  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
    avatar: "",
    sex: "", //select option
  });
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  function handleInput(e) {
    const nameInput = e.target.name;
    // console.log(nameInput);
    const value = e.target.value;
    // console.log(value);
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  const handleFile = (e) => {
    const uploadFiles = e.target.files;
    // setFiles(e.target.files);
    const fileArray = Array.from(uploadFiles);
    const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];

    fileArray.forEach((file) => {
      if (!validImageTypes.includes(file.type)) {
        alert("khong dung dinh dang");
        return;
      }
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 1) {
        alert("vuot qua 1MB roi");
        return;
      }
      console.log(`Name: ${file.name}`);
      console.log(`Type: ${file.type}`);
      console.log(`Size: ${file.size} bytes`);
    });
    setFiles(fileArray);
  };

  function renderError() {
    if (Object.keys(errors).length > 0) {
      return Object.keys(errors).map((key, index) => {
        return <li key={index}>{errors[key]}</li>;
      });
    }
  }

  function isEmail(email) {
    const regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  function handleForm(e) {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
    if (inputs.email == "") {
      errorSubmit.email = "vui long nhap email";
      flag = false;
    } else if (!isEmail(inputs.email)) {
      errorSubmit.email = "dinh dang email khong hop le";
      flag = false;
    }
    if(files.length == 0){
      errorSubmit.avatar = "hay import anh vao";
      flag=false;
    }
    if (inputs.pass == "") {
      errorSubmit.pass = "vui long nhap pass";
      flag = false;
    }
    if (inputs.sex == "") {
      errorSubmit.sex = "vui long chon select";
      flag = false;
    }
    if (!flag) {
      setErrors(errorSubmit);
    } else {
      console.log("dk thanh cong");
      const x = {
        email: inputs.email,
        pass: inputs.pass,
      };
      localStorage.setItem("user", JSON.stringify(x));
      //reset form
      setInputs({
        email: "",
        pass: "",
        avatar: "",
        sex: "",
      });
      // Clear errors (tùy chọn)
      setErrors({});
    }
  }
  return (
    <>
      {renderError()}
      <form onSubmit={handleForm} encType="multipart/form-data">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="nhập email đê"
          value={inputs.email}
          onChange={handleInput}
        />
        <label>Mật khẩu</label>
        <input
          type="pass"
          name="pass"
          placeholder="nhập pass đê"
          value={inputs.pass}
          onChange={handleInput}
        />
        <label>Avatar</label>
        <input
          type="file"
          name="avatar"
          value={inputs.avatar}
          onChange={handleFile}
        />
        <label>Giới Tính</label>
        <select name="sex" value={inputs.sex} onChange={handleInput}>
          {data.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <button type="submit">Click</button>
      </form>
      {/* {files.length > 0 && (
        <div>
          <h3>Uploaded Files</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} - {file.type} - {(file.size / 1024).toFixed(2)} KB
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </>
  );
}
export default FormRegister;
