export default function MessageInput() {
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmit}>
      <textarea maxLength="25vh" placeholder="Type your message here!" />
      <button type="submit">Send</button>
    </form>
  );
}
