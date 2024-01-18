import { useState } from "react";


export const useSlice = () => {
  const [counter, setCounter] = useState(0);
  return { counter, setCounter };
};

export default useSlice;
