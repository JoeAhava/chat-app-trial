import Head from "next/head";
import MessageInput from "../components/MessageInput";
const index = (props) => (
  <>
    <Head>
      <title>Welcome To my chat app</title>
    </Head>
    <main>
      <MessageInput />
    </main>
  </>
);
export default index;
