import React, { useEffect, useState } from 'react';

const Transactions = () => {
  const [transactList, updateTransactList] = useState([]);
  const [transactName, setTransactName] = useState('');
  const [transactAmount, setTransactAmount] = useState(0);
  const [rewardPoints, setRewardPoints] = useState(0);

  const addTransaction = (transactName, transactAmount, rewardPoints) => {
    updateTransactList( arr => [...arr, {transactName, transactAmount, rewardPoints}]);
  }

  const resetFields = () => {
    setTransactName('');
    setTransactAmount(0);
  }

  useEffect(() => {
    const val = transactAmount;
    let rp = 0;

    if(val > 50) {
      if(val <= 100) {
        rp = (val - 50) * 1;
      } else {
        rp = ((val - 100) * 2) + 50;
      }
    }

    setRewardPoints(rp);
  }, [transactAmount])

  return (
    <>
      <div className="transactionListContainer">
        <div className="transactionList">
          <span className="transactionList-header">Transaction Name</span> {' '}
          <span className="transactionList-header">Transaction Amount</span> {' '}
          <span className="transactionList-header">Reward Points</span>
        </div>
        <div className="transactionList">
          {transactList.map(item => {
            return (
              <div className="transactionList-entry">
                <label className="transactionList-entry--item">{item.transactName} </label>
                <label className="transactionList-entry--item">{item.transactAmount} </label>
                <label className="transactionList-entry--item">{item.rewardPoints} </label>
              </div>
          )})}
        </div>
      </div>
      <div className="addTransactionContainer">
        <div>
          <label>Transaction Name: </label>
          <input type="text" onChange={e => setTransactName(e.target.value)} value={transactName} />
        </div>
        <div>
          <label>Total $</label>
          <input type="number" onChange={e => setTransactAmount(e.target.value)} value={transactAmount}/>
        </div>
        <label>Reward Points Earned: </label>
        <label>{rewardPoints}</label>
        <br />
        <button onClick={() => {
          addTransaction(transactName, transactAmount, rewardPoints);
          resetFields();
        }
        }>Add Transaction</button>
      </div>
    </>
  )
}

export default Transactions;