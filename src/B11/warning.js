import { useState } from "react";

function Warning(props) {
  if (!props.warning) {
    return null;
  }
  return <div>warning !</div>;
}
function Test() {
  const [showWarning, setShowWarning] = useState(true);

  function handleButtonWarning() {
    setShowWarning(!showWarning);
  }
  return (
    <>
      <Warning warning={showWarning} />
      <button onClick={handleButtonWarning}>
        {showWarning ? "Hide" : "Show"}
      </button>
    </>
  );
}
export default Test;
