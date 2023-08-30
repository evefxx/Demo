import { useState } from 'react'
import './App.css'
import PostClassComponent from "./components/PostClassComponent";
import PostFunctionComponent from "./components/postFunctionComponent";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Demo</h1>
      <PostClassComponent userId="Rattana" message="เรียนวันนี้สนุกมาก ">
        <Comment userId="Dek_se" message="ง่วงมาก" />
        <Comment userId="Dream_se" message="หิวข้าววว" />
      </PostClassComponent>
    </>
  );
}

export default App;
