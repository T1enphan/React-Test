function ShowApi(props) {
  const { data } = props.data;
  if (!{ data }) {
    return <div>No Data</div>;
  } else {
    console.log(props.data);
    return <div>{renderData(data)}</div>;
  }
  function renderData() {
    // return (
    //   <div>
    //     {props.data.map((value) => (
    //       <div key={value.id}>
    //         <h2>{value.name}</h2>
    //         <p>
    //           <strong>Username:</strong> {value.username}
    //         </p>
    //         <p>
    //           <strong>Email:</strong> {value.email}
    //         </p>
    //         <p>
    //           <strong>Address:</strong> {value.address.street},{" "}
    //           {value.address.suite}
    //         </p>
    //         <p>
    //           <strong>Phone:</strong> {value.phone}
    //         </p>
    //         <p>
    //           <strong>Website:</strong> {value.website}
    //         </p>
    //         <p>
    //           <strong>Company:</strong> {value.company.name}
    //         </p>
    //         <p>
    //           <strong>Catch Phrase:</strong> {value.company.catchPhrase}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // ); bai 1
    return (
      <div>
        <p>ID: {props.data.id}</p>
        <p>name: {props.data.name}</p>
        <p>username: {props.data.username}</p>
        <p>email: {props.data.email}</p>
        <p>address:</p>
        <p>street: {props.data.address.street}</p>
        <p>suite: {props.data.address.suite}</p>
        <p>phone: {props.data.phone}</p>
        <p>website: {props.data.website}</p>
        <p>company:</p>
        <p>name: {props.data.company.name}</p>
        <p>catchPhrase: {props.data.company.catchPhrase}</p>
      </div>
    );
  }
}
export default ShowApi;
