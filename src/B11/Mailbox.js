function MailBox(props) {
  const xx = props.xx;
  return (
    <>
      <h1>Hello Main Yasuo</h1>
      {xx.length > 0 && <h2>you have {xx.length} unread messages</h2>}
    </>
  );
}
export default MailBox;
