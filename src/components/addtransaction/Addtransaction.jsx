import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';



export const Addtransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);


const { addTransaction } = useContext(GlobalContext);

const onSubmit = e => {
  e.preventDefault();


  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: +amount
  }


  addTransaction(newTransaction);
}


  return (
    <>
        <h3>Add new transaction</h3>
      <form onSubmit={ onSubmit }>
        <div className="form-control">
          <label htmlFor="text">Add Naration of Transaction</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
           placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount"
            >Amount <br />
            (Negative Stands for  Expense, Positive For - Income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter text..." /> 
        </div>
        <button className="btn">Add transaction</button>
      </form>

    </>
  )
}

export default Addtransaction