import './App.css';
import TestContext, {useTestContext} from "./Context/TestContext";
import ViewCount from "./ViewCount";
import {useContext} from "react";

function App() {
  // app에서 Context의 state를 가지고 있는 구조.
  const testContext = useTestContext();

  return (
    <div>
       <TestContext.Provider value={testContext}>
         <div className="App">
           <ViewCount />
         </div>
      </TestContext.Provider>
    </div>
  );
}

export default App;
