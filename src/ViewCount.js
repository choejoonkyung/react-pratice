import {useContext} from "react";
import TestContext from "./Context/TestContext";

function ViewCount(props) {
  const {count, plusCount} = useContext(TestContext);
  return (
    <>
      <button onClick={plusCount}>+</button>
      <p>{count}</p>
    </>
    )
}

export default ViewCount