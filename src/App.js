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
    transactions:[]
  }
  
  const reducer = (state, action)=>{
    switch (action.type) {
  
      case 'DELETE_TRANSACTION': return {
        ...state,
         transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }

      case 'ADD_TRANSACTION': return {
        ...state,
         transactions: [action.payload,...state.transactions]
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
  const addTransactions = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  const [state, dispatch] = useReducer(reducer, initialState);
      console.log(state.transactions)
  return (
    <div >
      <GlobalContext.Provider value={{globalState: state, globalDispatch: dispatch, deleteTransaction, addTransactions}}>
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
