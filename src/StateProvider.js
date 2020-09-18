import React, {createContext, useContext, useReducer} from 'react';
import {reducer, initialState} from './reducer';

//Prepares the data layer
 export const StateContext = createContext();

 //Build a provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* This 'children' refers to the app */}
        {children}
    </StateContext.Provider>
)

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);