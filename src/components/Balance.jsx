import React, { Fragment, useContext } from 'react'; 
import {GlobalContext}  from '../App';


export const Balance = () => {
    const context = useContext(GlobalContext);
    
    const { transactions }  = context.globalState;

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <Fragment>
            <h4>Your Balance</h4>
            <h1 id="balance"> #{total} </h1>
        </Fragment>
    )
}
