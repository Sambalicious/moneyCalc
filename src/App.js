import React, { useReducer } from 'react';

import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransactions } from './components/AddTransactions';


export const GlobalContext = React.createContext();



function App() {


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
  
      case 'DELETE_TRANSACTION': return {
        ...state,
         transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    
      default: return state
        break;
    }
  }
  
   const deleteTransaction = id  =>{
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  const [state, dispatch] = useReducer(reducer, initialState);
      console.log(state.transactions)
  return (
    <div >
      <GlobalContext.Provider value={{globalState: state, globalDispatch: dispatch, deleteTransaction}}>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransactions  />
     
        </div>
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Developed with love by E-Sam 2020
        </GlobalContext.Provider>
    </div>
  );
}

export default App;
