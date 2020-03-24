import React, { Fragment, useState,useContext } from 'react'
import { GlobalContext } from '../App';

export const AddTransactions = () => {
        const [text, setText] = useState('');
        const [amount, setAmount] = useState('');

        const handleText = e => {
            setText(e.target.value)
        }

        const handleAmount = e => {
            setAmount(e.target.value)
        }

       const {addTransactions}  = useContext(GlobalContext);
       


       const handleSubmit = e =>{
            e.preventDefault();
            const newTransaction = {
              id: Math.floor(Math.random() * 100000000),
              text,
              amount: +amount
            }

            addTransactions(newTransaction);
            setText('');
            setAmount('');
       }
    return (
        <Fragment>
            <h3>Add new transaction</h3>
      <form  onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text"> Title </label>
          <input value={text} onChange={handleText}  type="text" placeholder="Enter the purpose title..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount" >Amount <br />
            (Enter negative Values for Expenses e.g -2000 and Positive values for Income e.g +4000)</label >
          <input onChange={handleAmount} value={amount} type="number" placeholder="Enter amount..." />
        </div>

        <button className="btn">Add transaction</button>
      </form>
        </Fragment>
    )
}
