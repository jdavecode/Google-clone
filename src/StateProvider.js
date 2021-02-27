import React, { createContext, useContext, useReducer } from "react";

export const StateContent = createContext();

const StateProvider = ({ reducer, initialState, children }) => (
  <StateContent.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContent.Provider>
);

export default StateProvider;

export const UseStateValue = () => useContext(StateContent);
