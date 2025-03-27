import { useEffect, useReducer } from "react";

export const useLocalStorageCutomhook = (key, reducer, initialState) => {
  const initializer = () => {
    const storeValue = localStorage.getItem(key);
    return storeValue ? JSON.parse(storeValue) : initialState;
  };

  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, dispatch]);

  return [state, dispatch];
};
