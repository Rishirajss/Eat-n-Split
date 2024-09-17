import React, { useState } from 'react'
import Button from './Button'

export default function Fromsplitbill({selectedFriend, onSplitBill}) {

  let [totalBill, setTotalBill] = useState('');
  let [yourExp, setYourExp]= useState('');
  let payByFriend = totalBill ? totalBill - yourExp : "";
  let [whoispaying, setWhoisPaying] = useState('you');
  // let friendpay = 0;
  // friendpay = totalBill - yourExp;

  // console.log(setYourExp);
  function handleSubmit(e){
      e.preventDefault();

      if(!totalBill || !yourExp) return;
      onSplitBill(whoispaying === 'you' ? payByFriend : -yourExp);
  }

  return (
    <>
     
      <form className='form-split-bill' onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>🧑‍🤝‍🧑Bill value</label>   
             <input type="text" value={totalBill} onChange={(e)=> setTotalBill(Number(e.target.value))}/>
             
             <label>👨Your Expense</label>
             <input type="text" value={yourExp} onChange={(e)=>setYourExp(Number(e.target.value) > totalBill ? yourExp : Number(e.target.value))}/>

             <label>🧑‍🤝‍🧑{selectedFriend.name}s Expense</label>
             <input type="text" value={payByFriend} disabled/>

             <label>🤑 Who is paying the bill</label>
             <select value={whoispaying} onChange={((e)=> setWhoisPaying(e.target.value))}>
                    <option value="you">You</option>
                    <option value="friend">{selectedFriend.name}</option>
             </select>

             <Button >Split bill</Button>
      </form>   
      
    </>
  )
}
