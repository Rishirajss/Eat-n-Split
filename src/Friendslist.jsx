import React from 'react'
import Button from './Button'

export default function Friendslist({listing, onSelection, onselectedFriend}) {
  
  let isSelected = onselectedFriend?.id === listing.id;
  return (
    <div>
        <li className={isSelected ? "selected" : ''}>
            <img src={listing.image} alt={listing.name} />
            <h3>{listing.name}</h3>

            {listing.balance < 0 && <p className='red'>You owe {listing.name} {Math.abs(listing.balance)}</p> }
            {listing.balance > 0 && <p className='green'>You owe {listing.name} {listing.balance}</p> }
            {listing.balance === 0 && <p>You and {listing.name} are even</p> }

            <Button onClick={()=>onSelection(listing)}>{isSelected ? 'Close' : 'Select'}</Button>
        </li>
    </div>
  )
}
