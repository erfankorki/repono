/* eslint-disable react-hooks/exhaustive-deps */
import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";

const counterSubject = new BehaviorSubject(123);

export const useSlice = () => {
  const [counter, setCounter] = useState(() => counterSubject.value);

  useEffect(() => {
    const counterSubjectSubscription = counterSubject.subscribe(setCounter);
    return () => counterSubjectSubscription.unsubscribe();
  }, [counterSubject]);

  return { counter, setCounter };
};

export default useSlice;
