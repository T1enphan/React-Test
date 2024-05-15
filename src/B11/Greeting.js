function HamTrue() {
  return <>Greeting "true"</>;
}

function HamFalse() {
  return <>Greeting "false"</>;
}

function Greeting(props) {
  const xx = props.xx;
  if (xx) {
    return <HamTrue />;
  }
  return <HamFalse />;
}
export default Greeting;
