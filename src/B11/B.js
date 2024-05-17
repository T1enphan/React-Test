// Function component B
function B(props) {
  //   const { data } = props.data;
  //   if (!{ data }) {
  //     return <div>No data</div>;
  //   }
  //   return (
  //     <div>
  //       {props.data.map((value) => (
  //         <div key={value.id}>
  //           <h2>{value.name}</h2>
  //           <p>
  //             <strong>Username:</strong> {value.username}
  //           </p>
  //           <p>
  //             <strong>Email:</strong> {value.email}
  //           </p>
  //           <p>
  //             <strong>Address:</strong> {value.address.street},{" "}
  //             {value.address.suite}
  //           </p>
  //           <p>
  //             <strong>Phone:</strong> {value.phone}
  //           </p>
  //           <p>
  //             <strong>Website:</strong> {value.website}
  //           </p>
  //           <p>
  //             <strong>Company:</strong> {value.company.name}
  //           </p>
  //           <p>
  //             <strong>Catch Phrase:</strong> {value.company.catchPhrase}
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  //   Bài 32
  const { data2 } = props.data2;
  if (!{ data2 }) {
    return <div>Không có data</div>;
  } else {
    return <div>{renderData(data2)}</div>;
  }
  function renderData() {
    return (
      <div>
        <p>ID: {props.data2.id}</p>
        <p>name: {props.data2.name}</p>
        <p>username: {props.data2.username}</p>
        <p>email: {props.data2.email}</p>
        <p>address:</p>
        <p>street: {props.data2.address.street}</p>
        <p>suite: {props.data2.address.suite}</p>
        <p>phone: {props.data2.phone}</p>
        <p>website: {props.data2.website}</p>
        <p>company:</p>
        <p>name: {props.data2.company.name}</p>
        <p>catchPhrase: {props.data2.company.catchPhrase}</p>
      </div>
    );
  }
}
export default B;
