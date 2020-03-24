import React, { Fragment, useState } from 'react'

export const AddTransactions = () => {
        const [text, setText] = useState('');
        const [amount, setAmount] = useState(0);

        const handleText = e => {
            setText(e.target.value)
        }

        const handleAmount = e => {
            setAmount(e.target.value)
        }
    return (
        <Fragment>
            <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text"> Purpose</label>
          <input value={text} onChange={handleText}  type="text" placeholder="Enter the purpose title..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount" >Amount <br />
            (negative - expense, positive - income)</label >
          <input onChange={handleAmount} value={amount} type="number" placeholder="Enter amount..." />
        </div>

        <button className="btn">Add transaction</button>
      </form>
        </Fragment>
    )
}
