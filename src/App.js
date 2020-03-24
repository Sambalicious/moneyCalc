import React, { useReducer } from 'react';

import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransactions } from './components/AddTransactions';


const initialState = {
  transactions:[
      {id:1, text: 'Flower', amount: -100 },
      {id:2, text: 'Salary', amount: 2000 },
      {id:3, text: 'Airtime', amount: -700 },
      {id:4, text: 'Emergency', amount: -100 },
  ]
}
const reducer = (state, action)=>{
  switch (action.type) {
  
    default: return state
      break;
  }
}

export const GlobalContext = React.createContext();



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div >
      <GlobalContext.Provider value={{globalState: state, globalDispatch: dispatch}}>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransactions  />
     
        </div>
        </GlobalContext.Provider>
    </div>
  );
}

export default App;
