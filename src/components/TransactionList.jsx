import React, {Fragment, useContext} from 'react';
import { GlobalContext } from '../App';
import { Transaction } from './Transaction';


export const TransactionList = () => {
        const context = useContext(GlobalContext);
            
        const {transactions} = context.globalState
        
            
    return (
    <Fragment>
            
        <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}  />
                  ))}
                 
            </ul>
            
                
    </Fragment>
       
    )
}
