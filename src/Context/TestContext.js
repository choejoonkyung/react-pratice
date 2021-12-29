import React, {useState} from "react";

const DEFAULT_STATE = {
  count: 0,
  plusCount: () => {}
}

const TestContext = React.createContext(DEFAULT_STATE);

export const useTestContext = () => {
  const [count, setCount] = useState(1)
  const plusCount = () => setCount(prev => prev + 1);
  return {count, plusCount}
}

export default TestContext
